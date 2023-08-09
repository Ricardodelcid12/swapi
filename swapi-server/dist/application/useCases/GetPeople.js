"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPeopleHandler = exports.GetPeopleQuery = void 0;
const inversify_1 = require("inversify");
const PeopleRepository_1 = __importDefault(require("../../infrastructure/repositories/PeopleRepository"));
const PeopleSchema_1 = require("../../infrastructure/schemas/PeopleSchema");
class GetPeopleQuery {
    constructor() { }
}
exports.GetPeopleQuery = GetPeopleQuery;
let GetPeopleHandler = exports.GetPeopleHandler = class GetPeopleHandler {
    constructor(peopleRepository) {
        this.peopleRepository = peopleRepository;
    }
    async handle(query) {
        const peopleDtoList = [];
        const peopleList = await this.peopleRepository.Get();
        const iterableList = JSON.parse(JSON.stringify(peopleList));
        iterableList.map((element) => {
            const peopleData = (0, PeopleSchema_1.peopleModelToDto)(element);
            peopleDtoList.push(peopleData);
        });
        return peopleDtoList;
    }
};
exports.GetPeopleHandler = GetPeopleHandler = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [PeopleRepository_1.default])
], GetPeopleHandler);
//# sourceMappingURL=GetPeople.js.map