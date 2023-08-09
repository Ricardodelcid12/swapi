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
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const GetPeople_1 = require("../../application/useCases/GetPeople");
const SavePeople_1 = require("../../application/useCases/SavePeople");
let PeopleController = class PeopleController extends inversify_express_utils_1.BaseHttpController {
    constructor(getPeopleHandler, savePeopleHandler) {
        super();
        this.getPeopleHandler = getPeopleHandler;
        this.savePeopleHandler = savePeopleHandler;
    }
    async getPeople(req, res) {
        try {
            const data = await this.getPeopleHandler.handle(new GetPeople_1.GetPeopleQuery());
            res.status(201).json({
                message: "Swapi people ok.",
                data,
            });
        }
        catch (err) {
            res.status(500).json({ message: "Something went wrong..." });
        }
    }
    async savePeople(req, res) {
        try {
            await this.savePeopleHandler.handle(new SavePeople_1.SavePeopleCommand(req.body));
            res.status(201).json({ message: "Swapi people saved successfully." });
        }
        catch (err) {
            res.status(500).json({ message: "Something went wrong..." });
        }
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "getPeople", null);
__decorate([
    (0, inversify_express_utils_1.httpPost)("/save"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PeopleController.prototype, "savePeople", null);
PeopleController = __decorate([
    (0, inversify_express_utils_1.controller)("/people"),
    __metadata("design:paramtypes", [GetPeople_1.GetPeopleHandler,
        SavePeople_1.SavePeopleHandler])
], PeopleController);
exports.default = PeopleController;
//# sourceMappingURL=PeopleController.js.map