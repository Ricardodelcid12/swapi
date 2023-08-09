import { injectable } from 'inversify'
import { PeopleModel } from '../schemas/PeopleSchema'
import IPeopleRepository from '../../domain/interfaces/IPeopleRepository'
import { PeopleDto } from '../../application/dtos/PeopleDTO'

/**
 * This class provides methods for getting and saving person records, and is used to abstract the database access logic into a cleaner, more manageable interface.
 */
@injectable()
export default class PeopleRepository extends IPeopleRepository {
  /**
   * This function get all people from database.
   * @returns allPeople Mongo Documents List
   */
  async Get (): Promise<any> {
    const allPeople = PeopleModel.find()
    return allPeople
  }

  /**
   * This function get a people by name property from database.
   * @returns people Mongo Document
   */
  async GetByName (name: string): Promise<any> {
    const people = PeopleModel.find({ name: name })
    return people
  }

  /**
   * This function save a people in database.
   * @param people People Dto
   */
  async Save (people: PeopleDto): Promise<void> {
    const record = new PeopleModel(people)
    record.save().then(p => p.toObject())
  }
}
