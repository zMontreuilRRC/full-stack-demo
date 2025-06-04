# Deploying Git monorepo project to Vercel
1. Sign up with https://vercel.com/signup
2. Authorize Vercel connection to Github with signup

Main reference: https://vercel.com/docs/git/vercel-for-github
https://vercel.com/docs/monorepos

## Monorepo Setup for Monorepo
1. In **Vercel**, select `import Git Repository` under `Projects`
2. Under `Import Git Repository` (vercel.com/new), install Vercel in the chosen repository
3. Run an import for each application (e.g. `apps/frontend` and `apps/backend`)
4. Provide a `vercel.json` file specifying relations to each app:
   ```json
   // apps/frontend/vercel.json
   // project ID found in proj settings
   {
    "relatedProjects": ["related-project-id"]
   }
   ```
5. Add environent variables for the backend url consumed when in development/deployment

In `.env`:
```
VITE_API_BASE_URL=http://localhost:3000
```

For services:
```ts
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
```

## Backend Configuration
### Vercel-required architecture
Vercel must import the `app` object from the `/api/index.ts` file:

```ts
import app from "../src/app";
// look into changing this via configuration?
// vercel apparently needs this specific file to run in its deployment
export default app;
```

### Prisma Configuration
Prisma has a caching issue with dependencies on Vercel (see https://www.prisma.io/docs/orm/more/help-and-troubleshooting/vercel-caching-issue)

Add to `package.json`:
```json
{
   // . . .
   "scripts": {
      "postinstall": "prisma generate"
   }
}