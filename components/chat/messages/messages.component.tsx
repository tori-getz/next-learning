
import React from 'react';

import { useChat } from '../../../hooks/useChat';

import type { IMessage } from '../../../types/chat';
import { Message } from '../message/message.component';

import styles from './messages.module.css';

export const Messages: React.FC = () => {
    const { messages } = useChat();

    return (
        <div className={styles.scroll}>
            <div className={styles.wrapper}>
                {messages.map((message: IMessage, key: number) => (
                    <Message
                        {...message}
                        key={key}
                    />
                ))}
            </div>
        </div>
    )
}
