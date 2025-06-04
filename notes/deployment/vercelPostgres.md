# Deploying Postgres to Vercel

## Sources
https://vercel.com/docs/postgres

## Instructions
   Attempting to provision Neon PostGRES db:
1. Find Neon db integration page and select *install*
2. Create neon account via Vercel
   1. Unselect Auth
   2. Free Installation plan
3. Connect Project in Integrations
4. Get env.local `DB_URL` and add to backend deployment (this is automatically added with the integration)