import axios from "axios";


export const client = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 15000,
    validateStatus: () => true,
})