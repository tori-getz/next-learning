
import { useStore } from 'effector-react';

import {
    $username,
    $color,
    setUsername,
    setColor
} from '../store/user';

import type { IUser } from '../types/chat';

import { getRandomColor } from '../utils/color';

interface IUseChat {
    user: IUser,
    createUser: (name: string) => void
}

export const useChat = (): IUseChat => {
    const name = useStore($username);
    const color = useStore($color);

    const user = { name, color };

    const createUser = (name: string) => {
        setUsername(name);
        setColor(getRandomColor());
    }

    return {
        user,
        createUser
    };
}
