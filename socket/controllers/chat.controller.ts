
import {
    Controller,
    OnOpen,
    Event
} from '@socketzz/client';

@Controller('chat')
export class ChatController {
    @OnOpen()
    public onOpen () {
        console.log('connected!');
    }
}
