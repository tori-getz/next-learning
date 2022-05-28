
import React from 'react';

import { LoginForm } from '../../components/login-form/login-form.component';

import styles from './home.module.css';

export const HomeScreen: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <LoginForm />
        </div>
    )
}
