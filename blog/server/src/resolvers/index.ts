import { forwardTo } from 'prisma-binding'
import { Auth } from './auth'

export const resolvers = {
  Query: {
    posts: forwardTo('db'),
    post: forwardTo('db'),
    postsConnection: forwardTo('db'),
  },
  Mutation: {
    ...Auth
  },
  Node: {  // Biolerplate
    __resolveType() {
      return null;
    }
  }
}
  
