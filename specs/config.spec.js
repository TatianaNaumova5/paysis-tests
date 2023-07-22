import {config, user, transaction} from 'helpers'

describe('Config', ()=> {
	test('Get config', async () => {
		const {data, status} = await config.get()
		
		expect(status).toEqual(200)
		expect(data).toEqual({
			'number_of_entries': 25,
			'initial_amount': 1000,
		})
	})
	
	test('Delete config', async () => {
		await config.patch(20, 500)
		const userFromResponse = await user.create()
		const userToResponse = await user.create()
		await transaction.create(userFromResponse.data.id, userToResponse.data.id, 100)
		
		const configDeleteResponse = await config.delete()
		expect(configDeleteResponse.status).toEqual(200)
		expect(configDeleteResponse.data).toEqual({
			'message': 'Data wiped out.',
		})
		
		const configGetResponce = await config.get()
		expect(configGetResponce.data).toEqual({
			'number_of_entries': 25,
			'initial_amount': 1000
		})
		
		const getUserResponse = await user.get()
		expect(getUserResponse.data).toHaveLength(0)
		
		const getTransactionResponse = await transaction.get()
		expect(getTransactionResponse.data).toHaveLength(0)
	})
	
	describe('Patch config',  ()=>{
		test('Update to minimum entries', async ()=>{
			const patchConfigResponse = await config.patch(5)
			expect(patchConfigResponse.status).toEqual(200)
			expect(patchConfigResponse.data).toEqual({
				'number_of_entries': 5,
				'initial_amount': 1000,
			})
		})
	})
	
	const failedUserResponse = await user.create()
	expect(failedUserResponse.status).toEqual(400)
	expect(failedUserResponse.data).toEqual({
		'message': 'Maximum number of users reached.',
	})
	
	for (let i = 0; i < 5; i++) {
		await transaction.create(userFromResponse.data.id, userToResponse.data.id, 100)
	}
	
	
	const failedTransactionResponse = await transaction.create(
		userFromResponse.data.id, userToResponse.data.id, 100)
	expect(failedTransactionResponse.status).toEqual(400)
	expect(failedTransactionResponse.data).toEqual({
		'message': 'Maximum number of transactions reached.',
	})
})