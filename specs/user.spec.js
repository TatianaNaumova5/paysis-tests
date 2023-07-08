import {client} from 'common'

describe('User', ()=>{
  beforeAll(async () =>{
    const response = await client.post('/auth', {
      login: process.env.LOGIN,
      password: process.env.PASSWORD,
    })

    process.env['TOKEN'] = response.data.token
  })

  test('Create user', async ()=>{
    const token = process.env.token
    const createUserResponse = await client
      .post('/users', null, {headers:{'Authorization':`Bearer ${process.env.TOKEN}`}})

    expect(createUserResponse.status).toEqual(200)
    expect(createUserResponse.data).toEqual({
      id:expect.any(String),
      amount: expect.any(Number),
    })
    })
  })
