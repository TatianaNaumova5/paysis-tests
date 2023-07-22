import {client} from 'common'

export const delete_ = async () => {
	const config = {
		method: 'delete',
		url:'/config',
		headers: {
			'Authorization': `Bearer ${process.env.TOKEN}`,
		}
	}
	return  client.request(config)
}