import "dotenv/config";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "./dist/generated/prisma";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const user = await prisma.user.create({
    data: {
      username: "testuser",
      password: "testpass123",
    },
  });
  console.log("Created user:", user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
