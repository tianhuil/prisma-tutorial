// import { forwardTo } from 'prisma-binding'

export const resolvers = {
  Query: {
    posts: (parent, args, context, info) => {
      return context.db.posts(args, info)
    } 
  }
}
