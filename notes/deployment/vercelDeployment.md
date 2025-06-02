# Deploying Git monorepo project to Vercel
1. Sign up with https://vercel.com/signup
2. Authorize Vercel connection to Github with signup

Main reference: https://vercel.com/docs/git/vercel-for-github
https://vercel.com/docs/monorepos

## Initial Setup for Monorepo
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
5. Override necessary commands to build from the root (e.g. `cd ../.. && npm install`)