import { PeopleDto } from '../../application/dtos/PeopleDTO'

/**
 * This class is to define People core entity
 */
export class People {
  static toDto: () => PeopleDto

  constructor (
    public name: string,
    public height: string,
    public mass: string,
    public hair_color: string,
    public skin_color: string,
    public eye_color: string,
    public birth_year: string,
    public gender: string,
    public homeworld: string,
    public created: string,
    public edited: string,
    public url: string
  ) {}

  toDto (): PeopleDto {
    return {
      name: this.name,
      height: this.height,
      mass: this.mass,
      hair_color: this.hair_color,
      skin_color: this.skin_color,
      eye_color: this.eye_color,
      birth_year: this.birth_year,
      gender: this.gender,
      homeworld: this.homeworld,
      created: this.created,
      edited: this.edited,
      url: this.url
    }
  }
}

export interface PeopleDocument extends People, Document {}
