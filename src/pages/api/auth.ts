import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'
import { users } from '@/data/ui'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const user = users.find((user) => user.email === email && user.password === password)

    if (user) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        SECRET_KEY,
        { expiresIn: '1d' } // Token válido por 1 dia
      )

      res.setHeader(
        'Set-Cookie',
        serialize('auth-token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // Somente enviar em HTTPS no ambiente de produção
          sameSite: 'strict', // Protege contra ataques CSRF
          maxAge: 60 * 60 * 24, // 1 dia
          path: '/',
        })
      )

      return res.status(200).json({ message: 'Login successful' })
    }

    return res.status(401).json({ message: 'Invalid email or password' })
  }

  return res.status(405).json({ message: 'Method Not Allowed' })
}
