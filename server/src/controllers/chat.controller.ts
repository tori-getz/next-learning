
import {
    Controller,
    OnConnection
} from '@socketzz/server';

import { LoggerService } from '../services/logger.service';

@Controller('chat')
export class ChatController {
    private logger: LoggerService = new LoggerService(ChatController.name);

    @OnConnection()
    public async onConnection () {
        this.logger.info('new connection');
    }
}
