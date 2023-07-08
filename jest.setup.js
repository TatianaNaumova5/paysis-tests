import 'dotenv/config'
import {anonymousClient} from './common'

module.exports = async () => {
  const response = await anonymousClient.post('/auth', {
    login: process.env.LOGIN,
    password: process.env.PASSWORD,
  })
  process.env['TOKEN'] = response.data.token
}
