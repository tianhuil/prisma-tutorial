import * as fs from 'fs';
import { Prisma } from '../src/generated/prisma'

console.log(`Connecting to prisma on ${process.env.PRISMA_ENDPOINT}`)

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true,
})

fs.readFile(process.argv[2], "utf8", 
  async (err, data) => {
    console.log("Opening File")
    if (err) {
      console.log(`Unable to connect: ${err}`)
      process.exit(1)
    } else {
      console.log("Opened File")
      try {
        const response = await db.request(data)
        if (response.errors) {
          console.log("Error in Seeding")
          console.log(response.errors)
          process.exit(1)
        } else {
          console.log("Success in Seeding")
          console.log(response.data)
        }
      } catch (err) {
        console.log("Error submitting seed data")
        console.log(err.response.errors);
        console.log(err.response.data)
        process.exit(1)
      }
    }
  }
)
