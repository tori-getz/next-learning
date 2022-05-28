
import React from 'react';

import { Avatar, Card, User } from '@nextui-org/react';

import type { IMessage } from '../../../types/chat';

import { useChat } from '../../../hooks/useChat';

import styles from './message.module.css';
import cn from 'classnames';

export const Message: React.FC<IMessage> = ({
    user,
    text
}) => {
    const { user: me } = useChat();

    const isMe = user.id === me.id;

    return (
        <Card color={isMe ? 'gradient' : 'default'}>
            <div
                className={cn(
                    styles.wrapper,
                    { [styles.isMeWrapper]: isMe }
                )}
            >
                <User
                    className={cn(
                        styles.avatar,
                        { [styles.avatarHidden]: isMe }
                    )}
                    text={user.name}
                    name={user.name}
                    color={user.color}
                />
                <Avatar
                    className={cn(
                        styles.meAvatar,
                        { [styles.meAvatarVisible]: isMe }
                    )}
                    text={user.name}
                    color={user.color}
                />
                <div className={styles.message}>{text}</div>
            </div>
        </Card>
    )
}


