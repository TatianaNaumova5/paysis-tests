import {client} from 'common'

export const delete_ = async id => {
  const config = {
    method: 'delete',
    url: '/transactions',
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    data: {
      id,
    },
  }
  return client.request(config)
}
