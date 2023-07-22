import {client} from 'common'

export const delete_ = async (id) => {
  const config = {
    method: 'delete',
    url: '/config',
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    data: {
      id,
    },
  }
  return client.request(config)
}
