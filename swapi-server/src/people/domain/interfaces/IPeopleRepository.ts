import { injectable } from 'inversify'

@injectable()
export default class IPeopleRepository {
  async Get (): Promise<any> {}
  async GetByName (command: any): Promise<void> {}
  async Save (command: any): Promise<void> {}
}
