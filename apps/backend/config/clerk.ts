import { createClerkClient } from "@clerk/express";
// like Prisma, only instantiate one clerk client and import as needed

export const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY
});