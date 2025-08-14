# Complexicon: A simple full-stack demo project
## Local development setup

### Create Postgres DB
1. Create an empty PostgreSQL database and note its url.
   1. Any type of SQL-based db can be used, but change  `apps/backend/prisma/schema.prisma` provider accordingly.

## Create Clerk account and project
1. [Create an account with Clerk](clerk.com) and a Free Project
2. In the *Dashboard* navigate to *Developers/API Keys*
3. Copy the `PUBLIC` and `SECRET_KEY` values

## Add .envs
1. Create `apps/frontend/.env` and add:
```
VITE_CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>

VITE_API_BASE_URL=http://localhost:3000
```

2. Create `apps/backend/.env` and add:
```
CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>

CLERK_SECRET_KEY=<clerk-secret-key>

FRONTEND_URL=http://localhost:<your-localhost-port>

PORT=3000

DATABASE_URL=<local-postgres-db-url>
```

## Migrate and seed database
1. `cd <solution-root-directory>`
2. `npm run migrate:backend`
3. `cd apps/backend`
4. `npx prisma db seed`

## Run the app
1. `cd <solution-root-directory>`
2. `npm run dev`