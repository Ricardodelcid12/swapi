import { getSocketInstance } from '../../api/models/SocketInstance'
import PeopleRepository from '../../infrastructure/repositories/PeopleRepository'
import { PeopleDto } from '../dtos/PeopleDTO'
import { injectable } from 'inversify'

/**
 * This class represents a command to define the properties needed to the SavePeopleHandler.
 */
export class SavePeopleCommand {
  constructor (public readonly peopleList: Array<PeopleDto>) {}
}

/**
 * This class represents a handler to save a people list in people database context.
 */
@injectable()
export class SavePeopleHandler {
  /**
   * This constructor takes by dependency injection a people repository property. To interact with the database.
   * @property peopleRepository PeopleRepository
   */
  constructor (private peopleRepository: PeopleRepository) {}

  /**
   * This function receives a command with a people list to save it in the people database context.
   * @param command SavePeopleCommand
   */
  async handle (command: SavePeopleCommand): Promise<void> {
    await Promise.all(
      command.peopleList.map(async people => {
        const peopleExist: [] = await this.peopleRepository.GetByName(
          people.name
        )
        if (peopleExist.length === 0) {
          await this.peopleRepository.Save(people)
        }
      })
    )

    //Get socket intance to emmit async message
    const io = getSocketInstance()
    io.emit('NewPeople', 'People saved on database successfully!')
  }
}
