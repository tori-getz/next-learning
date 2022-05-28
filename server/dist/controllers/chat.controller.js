"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChatController_1;
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@socketzz/server");
const logger_service_1 = require("../services/logger.service");
let ChatController = ChatController_1 = class ChatController {
    constructor() {
        this.logger = new logger_service_1.LoggerService(ChatController_1.name);
    }
    async onConnection() {
        this.logger.info('new connection');
    }
};
__decorate([
    server_1.OnConnection()
], ChatController.prototype, "onConnection", null);
ChatController = ChatController_1 = __decorate([
    server_1.Controller('chat')
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map