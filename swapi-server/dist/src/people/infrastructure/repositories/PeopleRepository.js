"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const PeopleSchema_1 = require("../schemas/PeopleSchema");
const IPeopleRepository_1 = __importDefault(require("../../domain/interfaces/IPeopleRepository"));
/**
 * This class provides methods for getting and saving person records, and is used to abstract the database access logic into a cleaner, more manageable interface.
 */
let PeopleRepository = class PeopleRepository extends IPeopleRepository_1.default {
    /**
     * This function get all people from database.
     * @returns allPeople Mongo Documents List
     */
    async Get() {
        const allPeople = PeopleSchema_1.PeopleModel.find();
        return allPeople;
    }
    /**
     * This function get a people by name property from database.
     * @returns people Mongo Document
     */
    async GetByName(name) {
        const people = PeopleSchema_1.PeopleModel.find({ name: name });
        return people;
    }
    /**
     * This function save a people in database.
     * @param people People Dto
     */
    async Save(people) {
        const record = new PeopleSchema_1.PeopleModel(people);
        record.save().then(p => p.toObject());
    }
};
PeopleRepository = __decorate([
    (0, inversify_1.injectable)()
], PeopleRepository);
exports.default = PeopleRepository;
//# sourceMappingURL=PeopleRepository.js.map