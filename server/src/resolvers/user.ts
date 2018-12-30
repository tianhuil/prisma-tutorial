import { forwardTo } from 'prisma-binding'

function parentFn(parent, args, ctx, info) {
  return parent[info.fieldName]
}

export const UserTypes = {
  PublicUser: {
    id:         parentFn,
    firstName:  parentFn,
    lastName:   parentFn,
    about:      parentFn,
    createdAt:  parentFn,
    updatedAt:  parentFn,
    posts:      parentFn,
  }
}

export const UserQueries = {
  user: forwardTo('db'),
  users: forwardTo('db'),
  usersConnection: forwardTo('db'),
}
