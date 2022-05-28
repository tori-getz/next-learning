
import 'reflect-metadata';

import {
    SocketClient
} from '@socketzz/client';

import { ChatController } from './controllers/chat.controller';

export const socket = SocketClient.configure({
    controllers: [ChatController]
});
