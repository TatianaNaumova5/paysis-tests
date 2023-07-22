import {client} from 'common'

export const patch = async (number_of_entries = null, initial_amount = null) => {
	const config = {
		method: 'patch',
		url:'/config',
		headers: {
			'Authorization': `Bearer ${process.env.TOKEN}`,
		},
		data:{
			number_of_entries,
			initial_amount
		}
	}
	return  client.request(config)
}