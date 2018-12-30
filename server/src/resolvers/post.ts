import { forwardTo } from 'prisma-binding'

export const PostQueries = {
  post: forwardTo('db'),
  posts: forwardTo('db'),
  postsConnection: forwardTo('db'),
}
