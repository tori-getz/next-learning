
import React, { useState } from 'react';

import { Button, Card, Container, FormElement, Input, User } from '@nextui-org/react';

import styles from './login-form.module.css';

import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from '../../hooks/useTranslation';
import { useChat } from '../../hooks/useChat';
import { useRouter } from 'next/router';

export const LoginForm: React.FC = () => {
    const { isDark } = useTheme();

    const { t } = useTranslation();

    const {
        user,
        createUser
    } = useChat();

    const router = useRouter();

    const [ username, setUsername ] = useState<string>('');
    const [ error, setError ] = useState<boolean>(false);

    const handleInput = (e: React.ChangeEvent<FormElement>) => {
        if (error) setError(false);

        setUsername(e.target.value);
    }

    const onSubmit = () => {
        if (!username) return setError(true);

        createUser(username);

        router.push('/chat');
    }

    return (
        <Container
            sm
            css={{ mt: 15 }}
            responsive
        >
            <Card>
                <div className={styles.wrapper}>
                    <h4>{t('enter your username')}</h4>
                    <Input
                        status={error ? 'error' : 'default'}
                        value={username}
                        onChange={handleInput}
                        placeholder={t('username')}
                    />
                    <Button
                        bordered={isDark}
                        color='gradient'
                        onClick={onSubmit}
                    >
                        {t('connect')}
                    </Button>
                    <h1>{JSON.stringify(user)}</h1>
                    <User
                        name={user.name}
                        text={user.name}
                        color={user.color}
                        bordered
                    />
                </div>
            </Card>
        </Container>
    )
}
