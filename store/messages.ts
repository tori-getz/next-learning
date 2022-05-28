
import {
    createStore,
    createEvent
} from 'effector';

import type { IMessage } from '../types/chat';

export const $messages = createStore<IMessage[]>([]);

export const addMessage = createEvent<IMessage>('add message');

$messages.on(addMessage, (prev, message) => [ ...prev, message ])
