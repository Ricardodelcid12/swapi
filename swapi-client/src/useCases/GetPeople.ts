import HttpClient from '../services/HttpClient'

export const getPeople = () => {
  return new Promise(resolve => {
    HttpClient.get('/people').then(response => {
      resolve(response)
    })
  })
}
