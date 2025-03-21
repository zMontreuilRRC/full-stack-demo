# Object Relational Mapping (ORM)
## Prisma Setup
Optional: install `Prisma` vscode extension

1. Install `prisma` and `@prisma/client`:
`npm install --save-dev prisma --workspace=backend`
`npm install @prisma/client`

2. Initialize prisma schema:
```bash
cd apps/backend
npx prisma init
```

This creates the `prisma/` directory and the `prisma/schema.prisma` file.
It also adds `DATABASE_URL` to the `.env` file.

3. Configure the db connection in `.env`:
`DATABASE_URL="postgresql://<USER>:<Password>@localhost:5432/<DATABASE-NAME>"`
This connection string will be used to connect to the database for Prisma.

4. Define the database schema in `prisma/schema.prisma`:
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Term {
  id  Int @id @default(autoincrement())
  title String
  description String
  isFavourite Boolean
}
```

5. Generate the Prisma Client:
```bash
npx prisma generate
```

6. Migrate the database:
```bash
npx prisma migrate dev --name <migration-name>
```

This generates the `prisma/migrations` directory and apply that migration to the database.