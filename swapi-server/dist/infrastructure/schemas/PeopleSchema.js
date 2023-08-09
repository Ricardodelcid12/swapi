"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peopleModelToDto = exports.PeopleModel = void 0;
const mongoose_1 = require("mongoose");
const PeopleSchema = new mongoose_1.Schema({
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
});
exports.PeopleModel = (0, mongoose_1.model)('People', PeopleSchema);
const peopleModelToDto = (model) => {
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
    };
};
exports.peopleModelToDto = peopleModelToDto;
//# sourceMappingURL=PeopleSchema.js.map