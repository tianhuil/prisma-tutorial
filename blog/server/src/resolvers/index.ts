import { forwardTo } from 'prisma-binding'

export const resolvers = {
  Query: {
    posts: forwardTo('db'),
    post: forwardTo('db'),
    postsConnection: forwardTo('db'),
  }
}
  
