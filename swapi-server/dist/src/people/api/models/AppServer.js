"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const inversify_express_utils_1 = require("inversify-express-utils");
const http_1 = __importDefault(require("http"));
const AppDIContainer_1 = require("./AppDIContainer");
const PeopleDbService_1 = __importDefault(require("../../infrastructure/PeopleDbService"));
const SocketInstance_1 = require("./SocketInstance");
/**
 * This class takes about to startup the server.
 * Here you can configure your application dependencies by dependency inhection pattern.
 */
class AppServer {
    constructor() {
        this.container = AppDIContainer_1.AppDIContainer;
        this.port = process.env.PORT || '8080';
    }
    async Startup() {
        //This const takes the PeopleDbService configuration then do the connection.
        const db = this.container.get(PeopleDbService_1.default);
        await db.connect();
        /**
         * This const creates a new instance of InversifyExpressServer.
         * Read more about how it works and why to use it: https://inversify.io/
         */
        const server = new inversify_express_utils_1.InversifyExpressServer(this.container);
        //Configure application.
        server.setConfig(app => {
            app.use((0, cors_1.default)());
            app.use(express_1.default.json());
        });
        //Build application.
        const app = server.build();
        //Configure socket server implementation.
        const serverFromApp = http_1.default.createServer(app);
        const httpServer = serverFromApp.listen(this.port, () => {
            console.log('Server running on port: ' + this.port);
        });
        (0, SocketInstance_1.initializeSocket)(httpServer);
    }
}
exports.default = AppServer;
//# sourceMappingURL=AppServer.js.map