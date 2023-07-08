import {user} from 'helpers'

describe('User', () => {
  test('Create user', async () => {
    const createUserResponse = await user.create()

    expect(createUserResponse.status).toEqual(200)
    expect(createUserResponse.data).toEqual({
      id: expect.any(String),
      amount: expect.any(Number),
    })
  })
})
