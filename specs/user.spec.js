import {user} from 'helpers'

describe('User', () => {
  test('Create user', async () => {
    const {data,status} = await user.create()
    
    expect(status).toEqual(200)
    expect(data).toEqual({
      id: expect.any(String),
      amount: expect.any(Number),
    })
  })
  
  describe('Get user', () => {
    let userId
    
    beforeAll(async () => {
     const createUserResponse = await user.create()
      userId = createUserResponse.data.id
    })
    afterAll(async () => {
      await user.delete(userId)
    })
    
    test('Get user by id', async () => {
      const {data, status} = await user.get(userId)
      
      expect(status).toEqual(200)
      expect(data).toEqual({
        id: userId,
        amount: expect.any(Number),
      })
    })
    
    
    test('Get all users', async () => {
      const {data, status} = await user.get()
      
      expect(status).toEqual(200)
      expect(Array.isArray(data)).toBe(true)
      expect(data.length).toBeGreaterThanOrEqual(1)
      
      for await (const user of data) {
        expect(user).toEqual({
          id: expect.any(String),
          amount: expect.any(Number),
        })
      }
    })
  })
  
  
  describe('Delete user', () => {
      let userId
      
      beforeAll(async () => {
        const createUserResponse = await user.create()
        userId = createUserResponse.data.id
      })
      
      test('Delete user by id', async () => {
        const {data, status} = await user.delete(userId)
        
        expect(status).toEqual(200)
        expect(data).toEqual({
          message: 'User deleted.',
        })
      })
    })
  })
