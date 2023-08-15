import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT || 3003;
const prisma = new PrismaClient();

async function main() {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.listen(port, () => {
    console.log(`Server Runnning at ${port}`);
  });
}

main();
