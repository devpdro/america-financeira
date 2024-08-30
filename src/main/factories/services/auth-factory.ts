import jwt from 'jsonwebtoken'

import { SERVER_JWT_SECRET_KEY } from '@/constants'

export const generateToken = (user: { _id: string; email: string }) => {
  return jwt.sign({ id: user._id, email: user.email }, SERVER_JWT_SECRET_KEY, {
    expiresIn: '1d',
  })
}
