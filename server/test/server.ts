import { Prisma } from '../src/generated/prisma'

console.log(`Connecting to prisma on ${process.env.PRISMA_ENDPOINT}`)

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true,
})

async function seedDatabase() {
  console.log(await db.mutation.deleteManyPosts({}))
  console.log("Deleted Posts")

  console.log(await db.mutation.deleteManyUsers({}))
  console.log("Deleted Users")

  console.log(await db.mutation.createUser({data: {
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    hash: "xxx",
    posts: {
      create: [{
        headline: "A",
        topic: "HELP",
        body: "hi",
      }, {
        headline: "A",
        topic: "HELP",
        body: "hi",
      }]
    }
  }}))
  console.log("Added Data")

  const postResult = await db.query.postsConnection(
    {}, `{ aggregate { count } }`
  )
  console.assert(postResult.aggregate.count === 2)
  
  const userResult = await db.query.usersConnection(
    {}, `{ aggregate { count } }`
  )
  console.assert(userResult.aggregate.count === 1)
}

seedDatabase()
  .then(() => console.log("Done"))
  .catch(err => {
    console.log(`Encountered an error: ${err}`)
    process.exit(1)
  })
