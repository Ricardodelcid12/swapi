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
exports.SavePeopleHandler = exports.SavePeopleCommand = void 0;
const SocketInstance_1 = require("../../api/models/SocketInstance");
const PeopleRepository_1 = __importDefault(require("../../infrastructure/repositories/PeopleRepository"));
const inversify_1 = require("inversify");
/**
 * This class represents a command to define the properties needed to the SavePeopleHandler.
 */
class SavePeopleCommand {
    constructor(peopleList) {
        this.peopleList = peopleList;
    }
}
exports.SavePeopleCommand = SavePeopleCommand;
/**
 * This class represents a handler to save a people list in people database context.
 */
let SavePeopleHandler = exports.SavePeopleHandler = class SavePeopleHandler {
    /**
     * This constructor takes by dependency injection a people repository property. To interact with the database.
     * @property peopleRepository PeopleRepository
     */
    constructor(peopleRepository) {
        this.peopleRepository = peopleRepository;
    }
    /**
     * This function receives a command with a people list to save it in the people database context.
     * @param command SavePeopleCommand
     */
    async handle(command) {
        await Promise.all(command.peopleList.map(async (people) => {
            const peopleExist = await this.peopleRepository.GetByName(people.name);
            if (peopleExist.length === 0) {
                await this.peopleRepository.Save(people);
            }
        }));
        //Get socket intance to emmit async message
        const io = (0, SocketInstance_1.getSocketInstance)();
        io.emit('NewPeople', 'People saved on database successfully!');
    }
};
exports.SavePeopleHandler = SavePeopleHandler = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [PeopleRepository_1.default])
], SavePeopleHandler);
//# sourceMappingURL=SavePeople.js.map