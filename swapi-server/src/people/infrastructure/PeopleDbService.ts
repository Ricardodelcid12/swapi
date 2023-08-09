import mongoose from 'mongoose'
import { injectable } from 'inversify'

/**
 * This class handles the database connection through the connect method
 */
@injectable()
export default class PeopleDbService {
  async connect () {
    const host = process.env.DB_HOST || ''
    const port = process.env.DB_PORT || ''
    const db = process.env.DB_NAME || ''

    await mongoose.connect(`mongodb://${host}:${port}/${db}`)

    console.log('db connected...')
  }
}
