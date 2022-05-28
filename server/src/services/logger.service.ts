
import pino, { Logger } from 'pino';

export class LoggerService {
    private log: Logger;

    public constructor (name: string) {
        this.log = pino({
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

    public info (msg: string): void {
        this.log.info(msg);
    }

    public error (msg: string): void {
        this.log.error(msg);
    }
}
