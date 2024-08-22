import { type NextApiRequest, type NextApiResponse } from 'next'

import { HandleWebhookRequest } from '@/infra/http'

export default function healthCheck(req: NextApiRequest, res: NextApiResponse) {
  return HandleWebhookRequest(req, res)
}
