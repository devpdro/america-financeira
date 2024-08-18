import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import { users } from '@/data/ui'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const user = users.find((user) => user.email === email && user.password === password)

    if (user) {
      const token = jwt.sign(
        { email: user.email, password: user.password }, // Inclua role ou outras informações se necessário
        SECRET_KEY,
        { expiresIn: '1d' }
      )

      res.setHeader(
        'Set-Cookie',
        serialize('auth-token', token, {
          path: '/',
          httpOnly: true,
          maxAge: 60 * 60 * 24,
        })
      )

      return res.status(200).json({ message: 'Login successful' })
    }

    return res.status(401).json({ message: 'Invalid email or password' })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
