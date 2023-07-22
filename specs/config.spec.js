import {config, user, transaction} from 'helpers'

describe('Config', ()=>{
	test('Get config', async ()=>{
		const {data, status} = await config.get()
		
		expect(status).toEqual(200)
		expect(data).toEqual({
			'number_of_': 25,
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