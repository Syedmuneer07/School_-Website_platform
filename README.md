# School Website Platform Live
https://school-website-platform.onrender.com/

Full-stack starter for a startup that builds personalized websites for schools.

- **Frontend**: React (Vite) + Tailwind CSS + React Router + Axios
- **Backend**: Node.js + Express.js + JWT auth
- **Database**: PostgreSQL

## Project structure

```
school-platform/
├── client/      # React + Vite frontend
├── server/      # Express REST API
└── server/db/   # SQL schema + seed
```

## 1. Database setup (PostgreSQL)

Create a database, then run the schema and seed:

```bash
createdb school_platform
psql -d school_platform -f server/db/schema.sql
psql -d school_platform -f server/db/seed.sql
```

Default admin user (created by seed): **admin / admin123**

## 2. Backend

```bash
cd server
cp .env.example .env        # edit DB credentials + JWT_SECRET
npm install
npm run dev                 # http://localhost:5000
```

## 3. Frontend

```bash
cd client
cp .env.example .env        # VITE_API_URL=http://localhost:5000/api
npm install
npm run dev                 # http://localhost:5173
```

## API endpoints

| Method | Endpoint                         | Auth |
|--------|----------------------------------|------|
| POST   | /api/auth/login                  | —    |
| GET    | /api/achievements                | —    |
| POST   | /api/achievements                | ✅   |
| PUT    | /api/achievements/:id            | ✅   |
| DELETE | /api/achievements/:id            | ✅   |
| GET    | /api/results/:rollNumber         | —    |
| POST   | /api/results                     | ✅   |
| GET    | /api/alumni                      | —    |
| POST   | /api/alumni                      | ✅   |
| GET    | /api/events                      | —    |
| POST   | /api/events                      | ✅   |

Send `Authorization: Bearer <token>` for protected routes.

## Demo flow

1. Open http://localhost:5173
2. Browse Home, Achievements, Alumni, Events, Contact
3. Try Results page — search roll number `R001` (from seed)
4. Click "Admin" → log in with `admin / admin@123` → manage all content

# School_-Website_platform
