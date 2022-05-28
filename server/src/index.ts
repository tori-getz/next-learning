import "source-map-support/register";

import { SocketServer } from '@socketzz/server';

import { ChatController } from './controllers/chat.controller';

import { logger } from './logger';

const PORT: number = 4589;

logger.info('server starting...');

const server = new SocketServer({
    controllers: [ChatController]
});

server.listen({ port: PORT });

logger.info(`server started at ${PORT} port`);
