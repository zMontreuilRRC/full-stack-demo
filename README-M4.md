# COMPLEXICON: Module 4
## Setup
### Frontend Setup
1. **Create the frontend `.env` file** at `apps/frontend/.env`
2. Add `VITE_API_BASE_URL=http://localhost:<api-port-number>` to `.env`

### Backend setup
1. If using PostgreSQL, **create an empty database**.
2. **Create the backend `.env` file** at `apps/backend/.env`
3. **Add the required variables** to the `.env` file:
   1. `FRONTEND_URL=<url-of-front-end-server>`
   2. `PORT=3000`
   3. `DATABASE_URL=<url-of-local-postgres-db>`
4. **Apply prisma migrations**: `npm run migrate:backend`
5. **Seed the database** if needed: `cd apps/backend` and `npx prisma db seed` 