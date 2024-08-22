import axios from 'axios'

export const ProcessWebhookRequest = async (url: string, data: any) => {
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
