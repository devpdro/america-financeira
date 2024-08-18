import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { users } from '@/data/ui'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const user = users.find((user) => user.email === email && user.password === password)

    if (user) {
      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1d' })

      return res.status(200).json({ token }) // Retorna o token na resposta
    }

    return res.status(401).json({ message: 'Invalid email or password' })
  }

  return res.status(405).json({ message: 'Method Not Allowed' })
}
