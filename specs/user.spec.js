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
  })

  describe('Get user', ()=> {
    let createUserResponse

    beforeAll(async ()=>{
      createUserResponse = await user.create()
    })

    test('Get user by id', async () =>{
       const getUserResponse = await user.get(createUserResponse.data.id)

      expect(getUserResponse.status).toEqual(200)
      expect(getUserResponse.data).toEqual({
        id:createUserResponse.data.id,
        amount:expect.any(Number),
      })
    })


    test('Get all users', () =>{
      const getUsersResponse = user.get()
    })
  })
})