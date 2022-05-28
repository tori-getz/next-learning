
import React, { useState } from 'react';

import {
    Card,
    Input,
    Button
} from '@nextui-org/react';

import { useChat } from '../../../hooks/useChat';
import { useKeyPress } from '@react-typed-hooks/use-key-press';
import { useTranslation } from '../../../hooks/useTranslation';

import styles from './message-input.module.css';

interface IMessageInput {
    className?: string
}

export const MessageInput: React.FC<IMessageInput> = ({
    className
}) => {
    const { t } = useTranslation();

    const { sendMessage } = useChat();

    const [ text, setText ] = useState<string>('');

    const isEnterPressed = useKeyPress({ targetKey: 'Enter' });

    const onSubmit = () => {
        sendMessage(text);
        setText('');
    }

    (isEnterPressed && text !== '') && onSubmit();

    return (
        <div className={className}>
            <Card>
                <div className={styles.wrapper}>
                    <Input
                        value={text}
                        onChange={e => setText(e.target.value)}
                        rounded
                        aria-label='message'
                        bordered
                        status='primary'
                        placeholder={t('message')}
                        css={{ flex: 1 }}
                    />
                    <Button
                        onPress={onSubmit}
                        color='gradient'
                        bordered
                        rounded
                        disabled={text === ''}
                        className={styles.send}
                    >
                        {t('send')}
                    </Button>
                </div>
            </Card>
        </div>
    )
}
