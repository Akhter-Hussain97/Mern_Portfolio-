# Akhter Hussain — MERN Portfolio

A professional portfolio rebuilt from a Django project into the MERN stack.

| Django (before) | MERN (now) |
| --- | --- |
| `home.html` + `style.css` | React single-page app (`client/`, Vite) |
| `views.contact` + `ContactMessage` model (SQLite) | `POST /api/contact` + Mongoose model (MongoDB) |
| Django admin message list | `GET /api/contact` with an `x-admin-token` header |
| Hard-coded project lists | `Project` collection served by `GET /api/projects` (static fallback in the client) |
| Typed.js CDN, CSRF form | Built-in typing hook, validated JSON API, honeypot + rate limit |

## Run locally

Requires Node 18+ and a MongoDB instance (local or Atlas).

```bash
npm run install:all
cp server/.env.example server/.env     # set MONGODB_URI and ADMIN_TOKEN
npm run seed                           # load projects into MongoDB
npm run dev                            # API :5000 + site :5173
```

## Production

```bash
npm run build      # builds client/dist
npm start          # Express serves the API and the built site on $PORT
```

Read messages: `curl -H "x-admin-token: $ADMIN_TOKEN" http://localhost:5000/api/contact`

## Customize
Edit `client/src/data/profile.js` (bio, skills, education) and `server/src/config/projects.js` (then `npm run seed`).
Add real live-demo/repo links per project there — currently every repo link points to your GitHub profile.

## Tests
`npm test --prefix server` (uses an in-memory MongoDB).
