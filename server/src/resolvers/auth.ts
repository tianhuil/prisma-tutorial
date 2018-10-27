import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { ID_Output as ID, User } from '../generated/prisma'

const signedToken = (userId: ID) => {
  token: jwt.sign({ userId }, process.env.APP_SECRET),
  userId
}

export const Auth = {
  async signup(parent, {email, password}, ctx, info) {
    const hash: string = await bcrypt.hash(password, 10)
    const user: User = await ctx.db.mutation.createUser({
      data: { email, hash }
    })

    return signedToken(user.id)
  },
  async login(parent, {email, password}, ctx, info) {
    const user: User = await ctx.db.query.user({ where: {email} })
    if (!user) {
      throw new Error(`No user for email ${email}`)
    }

    if (!await bcrypt.compare(password, user.hash)) {
      throw new Error('Invalid password')
    }

    return signedToken(user.id)
  }
}
