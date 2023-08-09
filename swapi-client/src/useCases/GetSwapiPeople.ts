import { SwapiResponse } from '../components/Home'
import HttpClient from '../services/HttpClient'

export const getSwapiPeople = (): Promise<SwapiResponse>  => {
  return new Promise(resolve => {
    HttpClient.get('https://swapi.dev/api/people/').then(response => {
      resolve(response)
    })
  })
}
