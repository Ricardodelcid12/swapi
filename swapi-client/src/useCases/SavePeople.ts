import { People } from '../models/People'
import HttpClient from '../services/HttpClient'

export const savePeople = (data: People[]) => {
  return new Promise((resolve, reject) => {
    HttpClient.post('/people/save', data)
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}
