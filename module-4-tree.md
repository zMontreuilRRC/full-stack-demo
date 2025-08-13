```tree
<!-- full solution -->
full-stack-demo
    <!-- npm workspaces @complexicon:frontend/backend -->
├─ apps
│  ├─ backend
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ app.ts
│  │  │  └─ server.ts
│  │  └─ tsconfig.json
│  └─ frontend
│     ├─ eslint.config.js
│     ├─ package.json
│     ├─ public
│     ├─ src
│     │  └─ vite-env.d.ts
│     ├─ tsconfig.app.json
│     ├─ tsconfig.json
│     ├─ tsconfig.node.json
    <!-- vite configs (only needed in React) -->
│     └─ vite.config.ts
├─ package-lock.json
├─ package.json
├─ shared
    <!-- TS types used in both apps -->
│  └─ types
│     └─ frontend-term.ts
<!-- TSConfig used by full solution -->
├─ tsconfig.base.json
└─ tsconfig.json
```