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

### 3. Create the `apps` directory and subdirectories:
```bash
mkdir apps/frontend apps/backend
```

## Migrating the Frontend
### 1. Move the frontend files to `apps/frontend`

### 2. Update the `apps/frontend/package.json` "name" config:
```json
// apps/frontend/package.json
{
    "name": "@<appname>/frontend",
    // . . . 
}