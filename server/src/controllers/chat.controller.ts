
import {
    Controller,
    OnConnection
} from '@socketzz/server';

import { LoggerService } from '../services/logger.service';

const logger: LoggerService = new LoggerService('ChatController');

@Controller('chat')
export class ChatController {
    @OnConnection()
    public onConnection () {
        logger.info('new connection');
    }
}
