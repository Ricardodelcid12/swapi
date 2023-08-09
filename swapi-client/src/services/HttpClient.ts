import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://localhost:8080/'

const responseBody = (response: AxiosResponse) => response.data

const genericRequest = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  put: (url: string, body: object) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody)
}

export default genericRequest
