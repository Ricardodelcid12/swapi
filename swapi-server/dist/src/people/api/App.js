"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const AppServer_1 = __importDefault(require("./models/AppServer"));
dotenv_1.default.config();
//Creating an instance of main app server
const app = new AppServer_1.default();
//Start application
app.Startup();
//# sourceMappingURL=App.js.map