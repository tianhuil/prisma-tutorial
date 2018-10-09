import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import { resolvers } from './resolvers'

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true,
})

console.log(`Connecting to prisma on ${process.env.PRISMA_ENDPOINT}`)

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({ ...req, db }),
} as any)

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
)
