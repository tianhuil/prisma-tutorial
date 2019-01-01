import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { parse } from 'graphql';
import { Prisma } from './generated/prisma'
import { resolvers } from './resolvers'

export const createServer = () => {
  console.log("##################################")
  console.log(`Connecting to prisma on ${process.env.PRISMA_ENDPOINT}`)

  const db = new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true,
  })

  return new ApolloServer({
    typeDefs: parse(importSchema(__dirname + '/schema.graphql')),
    resolvers,
    context: req => ({ ...req, db }),
    tracing: true,
    formatError: (err) => { console.log(err.stack); return err },
  } as any)
}

if (require.main === module) {
  createServer().listen().then(({ url }) => {
    console.log("##################################")
    console.log(`Server is running on ${url}`)
  })
}
