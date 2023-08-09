import { Schema, model } from 'mongoose'
import { PeopleDto } from '../../application/dtos/PeopleDTO'

const PeopleSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  height: {
    type: String,
    required: false,
    trim: true
  },
  mass: {
    type: String,
    required: false,
    trim: true
  },
  hair_color: {
    type: String,
    required: false,
    trim: true
  },
  skin_color: {
    type: String,
    required: false,
    trim: true
  },
  eye_color: {
    type: String,
    required: false,
    trim: true
  },
  birth_year: {
    type: String,
    required: false,
    trim: true
  },
  gender: {
    type: String,
    required: false,
    trim: true
  },
  homeworld: {
    type: String,
    required: false,
    trim: true
  },
  created: {
    type: Date,
    required: false,
    default: Date.now
  },
  edited: {
    type: Date,
    required: false,
    default: Date.now
  },
  url: {
    type: String,
    required: false,
    trim: true
  }
})
export const PeopleModel = model('People', PeopleSchema)

export const peopleModelToDto = (model: any): PeopleDto => {
  return {
    name: model.name,
    height: model.height,
    mass: model.mass,
    hair_color: model.hair_color,
    skin_color: model.skin_color,
    eye_color: model.eye_color,
    birth_year: model.birth_year,
    gender: model.gender,
    homeworld: model.homeworld,
    created: model.created,
    edited: model.edited,
    url: model.url
  }
}
