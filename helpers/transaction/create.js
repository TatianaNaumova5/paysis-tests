import {client} from 'common'

export const create = async( from, to, amount) => {
	const config = {
		method: 'post',
		url: '/transactions',
		headers: {
			'Authorization': `Bearer ${process.env.TOKEN}`,
		},
		data:{
			from,
			to,
			amount
		}
	}
	return client.request(config)
}