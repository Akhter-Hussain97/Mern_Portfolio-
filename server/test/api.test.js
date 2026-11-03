import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createApp } from '../src/app.js';
import Project from '../src/models/Project.js';
import { projects } from '../src/config/projects.js';

let mongod, server, base;
before(async () => {
  process.env.ADMIN_TOKEN = 'secret';
  mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri());
  await Project.insertMany(projects);
  server = createApp().listen(0);
  base = `http://127.0.0.1:${server.address().port}`;
});
after(async () => {
  server.close();
  await mongoose.disconnect();
  await mongod.stop();
});

const post = (body) =>
  fetch(`${base}/api/contact`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });

test('projects list', async () => {
  const r = await fetch(`${base}/api/projects`);
  const data = await r.json();
  assert.equal(data.length, projects.length);
  assert.equal(data[0].title, 'MonkeyNews');
});

test('rejects invalid contact', async () => {
  const r = await post({ name: 'ab', email: 'nope', message: 'hi' });
  assert.equal(r.status, 400);
  const j = await r.json();
  assert.ok(j.errors.name && j.errors.email && j.errors.message);
});

test('saves valid contact and admin can read it', async () => {
  const r = await post({ name: 'Jane Doe', email: 'Jane@Example.com', message: 'Hello there!' });
  assert.equal(r.status, 201);
  assert.equal((await fetch(`${base}/api/contact`)).status, 401);
  const list = await (await fetch(`${base}/api/contact`, { headers: { 'x-admin-token': 'secret' } })).json();
  assert.equal(list.length, 1);
  assert.equal(list[0].email, 'jane@example.com');
});

test('honeypot is silently dropped', async () => {
  await post({ name: 'Bot Bot', email: 'b@b.com', message: 'spam spam', website: 'http://x' });
  const list = await (await fetch(`${base}/api/contact`, { headers: { 'x-admin-token': 'secret' } })).json();
  assert.equal(list.length, 1);
});
