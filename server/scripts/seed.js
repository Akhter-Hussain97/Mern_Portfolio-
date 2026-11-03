import 'dotenv/config';
import mongoose from 'mongoose';
import Project from '../src/models/Project.js';
import { projects } from '../src/config/projects.js';

await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio');
await Project.deleteMany({});
await Project.insertMany(projects);
console.log(`Seeded ${projects.length} projects`);
await mongoose.disconnect();
