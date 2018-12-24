import { forwardTo } from 'prisma-binding'

function parent (parent, args, ctx, info) {
  return parent[info.fieldName]
}

export const UserTypes = {
  PublicUser: {
    id:         parent,
    firstName:  parent,
    lastName:   parent,
    about:      parent,
    createdAt:  parent,
    updatedAt:  parent,
    posts:      parent,
  }
}

export const UserQueries = {
  user: forwardTo('db'),
  users: forwardTo('db'),
  usersConnection: forwardTo('db'),
}
