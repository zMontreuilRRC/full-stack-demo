import {PrismaClient} from "@prisma/client";

/**
 * Initialize a single PrismaClient (connection to the database) when 
 * the app first imports it.
 * 
 * This prevents multiple connections to the db from prisma
 * (see https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/instantiate-prisma-client)
 */
let prisma = new PrismaClient();

export default prisma;