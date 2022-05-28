"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
class LoggerService {
    constructor(name) {
        this.log = pino_1.default({
            name,
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true,
                    ignore: 'hostname,pid',
                    translateTime: true
                }
            }
        });
    }
    info(msg) {
        this.log.info(msg);
    }
    error(msg) {
        this.log.error(msg);
    }
}
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map