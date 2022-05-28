"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const server_1 = require("@socketzz/server");
const chat_controller_1 = require("./controllers/chat.controller");
const logger_1 = require("./logger");
const PORT = 4589;
logger_1.logger.info('server starting...');
const server = new server_1.SocketServer({
    controllers: [chat_controller_1.ChatController]
});
server.listen({ port: PORT });
logger_1.logger.info(`server started at ${PORT} port`);
//# sourceMappingURL=index.js.map