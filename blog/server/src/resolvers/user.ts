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
  async user(parent, args, ctx, info) {
    return await ctx.db.query.user(args, info)
  },
}
