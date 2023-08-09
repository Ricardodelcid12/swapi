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
const mongoose_1 = __importDefault(require("mongoose"));
const inversify_1 = require("inversify");
let PeopleDbService = class PeopleDbService {
    async connect() {
        const host = process.env.DB_HOST || '';
        const port = process.env.DB_PORT || '';
        const db = process.env.DB_NAME || '';
        await mongoose_1.default.connect(`mongodb://${host}:${port}/${db}`);
        console.log('db connected...');
    }
};
PeopleDbService = __decorate([
    (0, inversify_1.injectable)()
], PeopleDbService);
exports.default = PeopleDbService;
//# sourceMappingURL=PeopleDbService.js.map