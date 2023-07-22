import {client} from 'common'

export const get = async () => {
  const config = {
    method: 'get',
    url: '/config',
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  }
  return client.request(config)
}
