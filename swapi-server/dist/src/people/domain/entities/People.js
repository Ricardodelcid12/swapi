"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
/**
 * This class is to define People core entity
 */
class People {
    constructor(name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, created, edited, url) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
        this.homeworld = homeworld;
        this.created = created;
        this.edited = edited;
        this.url = url;
    }
    toDto() {
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
        };
    }
}
exports.People = People;
//# sourceMappingURL=People.js.map