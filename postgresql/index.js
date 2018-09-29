const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user with a new post
  const newUsers = await prisma
    .updateUser({
    	where: {
    		id: "cjmmwwm06000n0907vhbb32ux",
    	},
    	data: {name: 'Bob2'}
    })
  console.log(`Created new user: ${JSON.stringify(newUsers)}`)
}

main().catch(e => console.error(e))