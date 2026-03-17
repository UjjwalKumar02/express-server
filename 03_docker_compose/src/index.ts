import express from "express";
import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const app = express();
const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();

  res.json({ data });
});

app.post("/", async (req, res) => {
  await prisma.user.create({
    data: {
      name: "ujjwal",
      password: "hellp",
    },
  });

  res.json({ message: "user created!" });
});

(async () => {
  app.listen(3000, () => {
    console.log("Server is running on 3000!");
  });
})();
