import { injectable } from 'inversify'
import PeopleRepository from '../../infrastructure/repositories/PeopleRepository'
import { PeopleDto } from '../dtos/PeopleDTO'
import { peopleModelToDto } from '../../infrastructure/schemas/PeopleSchema'

/**
 * This class represents a query to define the properties needed to the GetPeopleQuery.
 */
export class GetPeopleQuery {
  constructor () {}
}

/**
 * This class represents a handler to get all people list from people database context.
 */
@injectable()
export class GetPeopleHandler {
  /**
   * This constructor takes by dependency injection a people repository property. To interact with the database.
   * @property peopleRepository PeopleRepository
   */
  constructor (private peopleRepository: PeopleRepository) {}

  /**
   * This function receives a query class to get people from database context
   * In this case GetPeopleQuery does not contains properties, but you can implement a filter property by intance.
   * @param query GetPeopleQuery
   * @returns peopleDtoList PeopleDto[]
   */
  async handle (query: GetPeopleQuery): Promise<PeopleDto[]> {
    const peopleDtoList: PeopleDto[] = []

    const peopleList = await this.peopleRepository.Get()
    const iterableList = JSON.parse(JSON.stringify(peopleList))

    iterableList.map((element: any) => {
      const peopleData = peopleModelToDto(element)
      peopleDtoList.push(peopleData)
    })

    return peopleDtoList
  }
}
