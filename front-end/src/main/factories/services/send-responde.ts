import { NextApiResponse } from 'next'

export const sendResponse = (res: NextApiResponse, status: number, message: string) => {
  res.status(status).json({ message })
}
