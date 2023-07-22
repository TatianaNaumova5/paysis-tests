import {user, transaction} from 'helpers'

describe('Transaction', ()=> {
	const amount = 1000
	
	let cleanUpFunctions = []
	afterEach(async () => {
		await cleanUpFunctions.reduce(
			(promise, callback) => promise.then(() => callback()),
			Promise.resolve(),
		)
		cleanUpFunctions = []
	})
	
	describe('Create transaction', () => {
		test('Send money from one user to another', async () => {
			const userFrom = await user.create()
			cleanUpFunctions.push(async ()=> await user.delete(userFrom.data.id))
			
			const userTo = await user.create()
			cleanUpFunctions.push(async ()=> await user.delete(userTo.data.id))
			
			const {status, data} = await transaction.create(userFrom.data.id, userTo.data.id, amount)
			cleanUpFunctions.push(async ()=> await transaction.delete(userTo.data.id))
			
			expect(status).toEqual(200)
			expect(data).toEqual({
				id: expect.any(String),
				from: userFrom.data.id,
				to: userTo.data.id,
				amount,
			})
			
			const getUserFromResponse = await user.get(userFrom.data.id)
			expect(getUserFromResponse.data.amount).toEqual((+process.env.INITIAL_AMOUNT) - amount)
			
			const getUserToResponse = await user.get(userTo.data.id)
			expect(getUserToResponse.data.amount).toEqual((+process.env.INITIAL_AMOUNT) + amount)
		})
	})
})