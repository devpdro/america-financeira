import jwt from 'jsonwebtoken'
import { findUserByEmail, validatePassword, User } from '../user'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

interface JwtPayload {
  email: string
}

export const login = async (email: string, password: string): Promise<string> => {
  const user = findUserByEmail(email)

  if (!user || !(await validatePassword(user, password))) {
    throw new Error('Invalid email or password')
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' })
  return token
}

export const authenticateToken = (token: string): JwtPayload => {
  try {
    const user = jwt.verify(token, SECRET_KEY) as JwtPayload
    return user
  } catch (error) {
    throw new Error('Invalid token')
  }
}
