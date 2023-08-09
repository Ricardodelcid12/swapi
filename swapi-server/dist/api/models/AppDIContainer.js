"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDIContainer = void 0;
const inversify_1 = require("inversify");
const PeopleController_1 = __importDefault(require("../controllers/PeopleController"));
const GetPeople_1 = require("../../application/useCases/GetPeople");
const PeopleDbService_1 = __importDefault(require("../../infrastructure/PeopleDbService"));
const PeopleRepository_1 = __importDefault(require("../../infrastructure/repositories/PeopleRepository"));
const SavePeople_1 = require("../../application/useCases/SavePeople");
exports.AppDIContainer = new inversify_1.Container({
    defaultScope: "Singleton",
});
exports.AppDIContainer.bind(PeopleDbService_1.default).toSelf();
exports.AppDIContainer.bind(PeopleRepository_1.default).toSelf();
exports.AppDIContainer.bind(GetPeople_1.GetPeopleHandler).toSelf();
exports.AppDIContainer.bind(SavePeople_1.SavePeopleHandler).toSelf();
exports.AppDIContainer.bind(PeopleController_1.default).toSelf();
//# sourceMappingURL=AppDIContainer.js.map