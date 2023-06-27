import axios from "axios"
import {client} from '../common/client.js'

describe('Authorization & Authentification', () => {
    test('Sign in with existing credentials', async () => {
        const response = await axios.post('http://localhost:3000/auth', {login: 'admin', password: 'admin'})
        expect(response.status).toEqual(200)
        expect(response.data).toEqual({
            token: expect.any(String)
        })
    })
    test('Sign in with not existing credentials',async ()=> {
        const client = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 15000,
            validateStatus: () => true,
        })
        const response = await client.post('/auth', {login: 'invalid', password: 'invalid'})
        expect(response.status).toEqual(404)
        expect(response.data).toEqual({
            message: 'Wrong login or password.'
        })
    })
})