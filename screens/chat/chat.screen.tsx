
import React from 'react';

import { MessageInput } from '../../components/chat/message-input/message-input.component';
import { Messages } from '../../components/chat/messages/messages.component';

import styles from './chat.module.css';

export const ChatScreen: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Messages />
            <MessageInput className={styles.input} />
        </div>
    )
}
