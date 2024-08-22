import { NextApiResponse } from 'next'

export const HandleResquestError = (error: any, res: NextApiResponse) => {
  if (error.response) {
    res.status(error.response.status).json({ message: 'Erro ao processar a solicitação.' })
  } else {
    res.status(500).json({ message: 'Erro interno do servidor.' })
  }
}
