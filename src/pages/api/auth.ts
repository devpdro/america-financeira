import { NextApiRequest, NextApiResponse } from 'next'
import { login } from '@/main/services/auth/auth'
import cookie from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body
    try {
      const token = await login(email, password)

      // Define o cookie no cliente
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60, // 1 hora
          sameSite: 'strict',
          path: '/',
        })
      )

      res.status(200).json({ success: true })
    } catch (error: any) {
      res.status(401).json({ error: error.message })
    }
  } else {
    res.status(405).end() // Método não permitido
  }
}
