import axios from 'axios'
import { SwapiResponse } from '../components/Home'

export const getSwapiPeople = (): Promise<SwapiResponse>  => {
  return new Promise(resolve => {
    axios.get('https://swapi.dev/api/people/').then(response => {
      resolve(response.data)
    })
  })
}
