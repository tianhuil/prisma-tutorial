import { forwardTo } from 'prisma-binding'
import { Auth } from './auth'
import { UserTypes, UserQueries } from './user'
import { PostQueries } from './post'

export const resolvers = {
  Query: {
    posts: forwardTo('db'),
    post: forwardTo('db'),
    postsConnection: forwardTo('db'),
    ...UserQueries,
    ...PostQueries,
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
