import {user} from 'helpers'
import {request} from 'axios'

describe('User', () => {
  test('Create user', async () => {
    const createUserResponse = await user.create()

    expect(createUserResponse.status).toEqual(200)
    expect(createUserResponse.data).toEqual({
      id: expect.any(String),
      amount: expect.any(Number),
    })

    test('Get user by Id', async () => {
      const getUseresponse = await user.get(`/users?id=${userId}`)
    })
    expect(getUseresponse.status).toEqual(200)
    expect(getUseresponse.data.id).toEqual(userId)
  })
})