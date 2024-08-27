import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import db from '@/lib/db.mjs' // Substitua pelo caminho correto para o db.ts

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    // Procura o usuário no banco de dados Nedb
    db.findOne({ email, password }, (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Erro interno no servidor' })
      }

      if (user) {
        // Gera um token JWT
        const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1d' })

        // Define o cookie com o token de autenticação
        res.setHeader(
          'Set-Cookie',
          serialize('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24,
            path: '/',
          })
        )

        return res.status(200).json({ message: 'Login realizado com sucesso' })
      }

      return res.status(401).json({ message: 'E-mail ou senha inválidos' })
    })
  } else {
    return res.status(405).json({ message: 'Método não permitido' })
  }
}
