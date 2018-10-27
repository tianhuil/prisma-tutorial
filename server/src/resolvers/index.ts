import { forwardTo } from 'prisma-binding'
import { Auth } from './auth'
import { UserTypes, UserQueries } from './user'

export const resolvers = {
  Query: {
    posts: forwardTo('db'),
    post: forwardTo('db'),
    postsConnection: forwardTo('db'),
    ...UserQueries
  },
  Mutation: {
    ...Auth
  },
  Node: {  // Biolerplate
    __resolveType() {
      return null;
    }
  },
  ...UserTypes
}
