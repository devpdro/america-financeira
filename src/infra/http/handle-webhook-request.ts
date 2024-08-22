import { NextApiRequest, NextApiResponse } from 'next'

import { HandleResquestError, ProcessWebhookRequest } from '@/infra/http'

const webhookUrls: Record<string, string> = {
  partners: 'https://n8n.americaintegracao.com.br/webhook/callback_partners',
  default: 'https://n8n.americaintegracao.com.br/webhook/callback_default',
}

export default async function HandleWebhookRequest(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Método ${req.method} Não`)
  }

  const { type } = req.query
  const webhookUrl = webhookUrls[type as string]

  if (!webhookUrl) {
    return res.status(400).json({ message: 'Tipo de webhook inválido.' })
  }

  try {
    const response = await ProcessWebhookRequest(webhookUrl, req.body)
    return res.status(200).json(response.data)
  } catch (error) {
    return HandleResquestError(error, res)
  }
}
