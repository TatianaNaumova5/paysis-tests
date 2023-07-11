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


    test('Get all users', async () =>{
      const getUsersResponse =  await user.get()

      expect(getUsersResponse.status).toEqual(200)
      expect(Array.isArray(getUsersResponse.data)).toBe(true)
      expect(getUsersResponse.data.length).toBeGreaterThanOrEqual(1)

      for await (const user of getUsersResponse.data){
        expect(user).toEqual({
          id: expect.any(String),
          amount:expect.any(Number),
        })
      }
    })
  })
})