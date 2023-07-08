import {anonymousClient} from 'common'

describe('Authorization & Authentication', () => {
  test('Sign in with existing credentials', async () => {
    const response = await anonymousClient().post('/auth', {
      login: process.env.LOGIN,
      password: process.env.PASSWORD,
    })

    expect(response.status).toEqual(200)
    expect(response.data).toEqual({
      token: expect.any(String),
    })
  })

  test('Sign in with not existing credentials', async () => {
    const response = await anonymousClient().post('/auth', {
      login: 'invalid', password: 'invalid'})

    expect(response.status).toEqual(404)
    expect(response.data).toEqual({
      message: 'Wrong login or password.',
    })
  })
})
