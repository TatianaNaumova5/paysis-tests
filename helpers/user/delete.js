import {client} from 'common'

export const delete_= async (id) => {
  const config = {
    method: 'delete',
    url:'/users',
    data: {
      id: id
    },
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
    }
  }
  return  client.request(config)
}
