
import { useRef } from 'react';

import { useStore } from 'effector-react';

import {
    $username,
    $color,
    $id,
    setId,
    setUsername,
    setColor
} from '../store/user';

import {
    $messages,
    addMessage
} from '../store/messages';

import { useSocket } from './useSocket';

import type { IUser, IMessage } from '../types/chat';

import { getRandomColor } from '../utils/color';
import { v4 as uuidv4 } from 'uuid';

interface IUseChat {
    user: IUser
    isAuth: boolean
    createUser: (name: string) => void
    messages: Array<IMessage>
    sendMessage: (text: string) => void
}

export const useChat = (): IUseChat => {
    const id = useStore($id);
    const name = useStore($username);
    const color = useStore($color);

    const user = { id, name, color };
    const isAuth: boolean = name !== '' && id !== '';

    const createUser = (name: string) => {
        setUsername(name);
        setId(uuidv4());
        setColor(getRandomColor());
    }

    const messages = useStore($messages);

    const sendMessage = (text: string): void => {
        addMessage({ user, text });
    }

    return {
        user,
        isAuth,
        createUser,
        messages,
        sendMessage
    };
}
