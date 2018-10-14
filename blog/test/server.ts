import { Prisma } from '../src/generated/prisma'

console.log(`Connecting to prisma on ${process.env.PRISMA_ENDPOINT}`)

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true,
})

db.mutation.createUser({data: {
  firstName: "Alice",
  lastName: "Smith",
  email: "alice@example.com",
  hash: "xxx",
  posts: {
    create: [{
      headline: "A",
      topic: "HELP",
      body: "hi",
    }]
  }
}}).catch(err => {
  console.log("This sucks")
  console.log(err)
  process.exit(1)
})
