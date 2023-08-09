"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocketInstance = exports.initializeSocket = void 0;
const socket_io_1 = require("socket.io");
let ioInstance;
const initializeSocket = (httpServer) => {
    ioInstance = new socket_io_1.Server(httpServer, {
        cors: { origin: '*' }
    });
};
exports.initializeSocket = initializeSocket;
const getSocketInstance = () => {
    if (!ioInstance) {
        throw new Error('Socket.IO instance has not been initialized.');
    }
    return ioInstance;
};
exports.getSocketInstance = getSocketInstance;
//# sourceMappingURL=SocketInstance.js.map