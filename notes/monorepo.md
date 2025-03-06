# Monorepo Pattern
Monorepo pattern has a highly detailed website explaining: https://monorepo.tools/

## Monorepo with TS
A major concern in monorepo is how individual packages are made available to each other. Relative pathing for direct imports can cause performance issues and grow unruly with larger apps. 

## NPM Workspaces
Workspaces support managing multiple packages in different directories. This basically allows multiple directories with `package.json` files to interact.
See https://docs.npmjs.com/cli/v8/using-npm/workspaces 

## Concurrent app running
The `concurrently` package can be used to run multiple projects [https://www.npmjs.com/package/concurrently]