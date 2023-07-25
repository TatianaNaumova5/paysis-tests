import {client} from 'common'

export const healthCheck = async () => {
	const config = {
		method: 'get',
		url: '/healthcheck',
	}
	return client.request(config)
}
