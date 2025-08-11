import { PrismaClient } from "@prisma/client";
import { termSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.term.deleteMany();

    // insert terms to db
    const createManyTerms = await prisma.term.createManyAndReturn(
        {
            data: termSeedData,
            skipDuplicates: true
        }
    );

    console.log(`CREATED TERMS: ${createManyTerms}`);
};

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 