import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { parse } from 'graphql';
import { Prisma } from './generated/prisma'
import { resolvers } from './resolvers'

console.log("##################################")
console.log(`Connecting to prisma on ${process.env.PRISMA_ENDPOINT}`)
console.log("##################################")

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: true,
})

const server = new ApolloServer({
  typeDefs: parse(importSchema(__dirname + '/schema.graphql')),
  resolvers,
  context: req => ({ ...req, db }),
  tracing: true,
} as any)

server.listen().then(({ url }) => {
  console.log("##################################")
  console.log(`Server is running on ${url}`)
  console.log("##################################")
})
