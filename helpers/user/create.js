import {client} from 'common'

export const create = async () => {
  const config = {
    method: 'post',
    url:'/users',
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
    }
  }
  return  client.request(config)
}
