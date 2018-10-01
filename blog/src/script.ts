const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
  // create a new user
  const newUser = await prisma.createUser({
    email:      "foo@gmail.com",
    hash:       "slkdjf",
    firstName:  "Alice",
    lastName:   "Smith",
    posts: {create: []},
  })
  console.log(`New User ${JSON.stringify(newUser)}`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))
