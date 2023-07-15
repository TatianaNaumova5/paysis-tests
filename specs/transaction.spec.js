import {user, transaction} from 'helpers'

describe('Transaction', ()=>{
	const amount = 100
	
	test('Create transaction', async ()=>{
		const  userFrom = await user.create()
		const  userTo = await user.create()
		
		const {status, data}= await transaction.create(userFrom.data.id, userTo.data.id, amount)
		
		expect(status).toEqual(200)
		expect(data).toEqual({
			id: expect.any(String),
			from: userFrom.data.id,
			to: userTo.data.id,
			amount,
		})
		
		await user.delete(userFrom.data.id)
		await user.delete(userTo.data.id)
	})
})