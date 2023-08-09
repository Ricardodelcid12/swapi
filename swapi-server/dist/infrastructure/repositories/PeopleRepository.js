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
let PeopleRepository = class PeopleRepository extends IPeopleRepository_1.default {
    async Get() {
        const allPeople = PeopleSchema_1.PeopleModel.find();
        return allPeople;
    }
    async GetByName(name) {
        const people = PeopleSchema_1.PeopleModel.find({ name: name });
        return people;
    }
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