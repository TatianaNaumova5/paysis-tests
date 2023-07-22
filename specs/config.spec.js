import {config, user, transaction} from 'helpers'

describe('Config', ()=>{
	test('Get config', async ()=>{
		const {data, status} = await config.get()
		
		expect(status).toEqual(200)
		expect(data).toEqual({
			'number_of_entries': 25,
			'initial_amount': 1000,
		})
	})
	test('Delete config', async ()=>{
		await config.patch(20, 500)
		const userFromResponse = user.create()
		const userToResponse = user.create()
		await transaction.create(userFromResponse.data.id, userToResponse.data.id, 100)
		await config.delete()
		
		await configResponce = await user.get()
	})
})
const failedUserResponse = await user.create()
expect(failedUserResponse.status).toEqual(400)
expect(failedUserResponse.data).toEqual({
	'message': 'Maximum number of users reached.',
})

for (let i = 0; i < 5; i++){
	await transaction.create(userFromResponse.data.id, userToResponse.data.id, 100)
}


const failedTransactionResponse = await transaction.create(
	userFromResponse.data.id, userToResponse.data.id, 100)
expect(failedTransactionResponse.status).toEqual(400)
expect(failedTransactionResponse.data).toEqual({
	'message': 'Maximum number of transactions reached.',
})