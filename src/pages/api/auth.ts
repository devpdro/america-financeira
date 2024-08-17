import { NextApiRequest, NextApiResponse } from 'next'
import { users } from '@/data/ui'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    const user = users.find((user) => user.email === email && user.password === password)

    if (user) {
      return res.status(200).json({ message: 'Login successful' })
    }

    return res.status(401).json({ message: 'Invalid email or password' })
  }

  res.setHeader('Allow', ['POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
