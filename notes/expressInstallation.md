# Installing Express in the Application
This guide will describe how to install a new Express project in a Monorepo pattern as a backend for an extant React application.

## Instructions
### Initializing the Monorepo
#### 1. Initialize a new root workspace 
```bash
mkdir root-dir
cd root-dir
npm init -y
```

#### 2. Enable workspaces in the root package manager
In `/package.json`:
```json
{
  "name": "<appname>",
  "workspaces": ["apps/*"],
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start:frontend": "npm run dev --workspace=@<appname>/frontend",
    "start:backend": "npm run dev --workspace=@<appname>/backend",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "description": ""
}
```

#### 3. Create the `apps` directory and subdirectories:
```bash
mkdir apps/frontend apps/backend
```

### Migrating the Frontend
### 1. Move the frontend files to `apps/frontend`

### 2. Update the `apps/frontend/package.json` "name" config:
```json
// apps/frontend/package.json
{
    "name": "@<appname>/frontend",
    // . . . 
}
```

### Initializing the Backend
### 1. `npm init -y` in `apps/backend`
### 2. Install tools using `npm install <tools> -w @complexicon/backend`

### Consolidating Configuration
Configuration with NPM workspaces means that we have a centralized package manager.
#### 1. Delete the `package-lock.json` and `node_modules` directories and files
#### 2. Run a full installation with `npm install`

### Consolidating TypeScript:
Create the central and module TS configs as committed

### Managing the Monorepo Front-To-Back Connection
There are some advantages to creating a proxy in frontend that will communicate with the backend:
1. Browser security will block API calls between different origins (CORS)
2. The API in the frontend may fetch from a shortened URL (e.g. "`fetch('/api/data')`)
3. Cookies can be made from the same origin 
