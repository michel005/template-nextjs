import axios from 'axios'
import definitions from '../../definitions.json'

export const API = axios.create({
    baseURL: definitions.api,
})
