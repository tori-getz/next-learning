
import React from 'react';

import {
    Card,
    Text
} from '@nextui-org/react';

import { LanguageSwitch } from '../ui/language-switch.component';
import { ThemeSwitch } from '../ui/theme-switch.component'

import styles from './navbar.module.css';;

export const Navbar: React.FC = () => {
    return (
        <Card css={{ m: 10 }}>
            <div className={styles.wrapper}>
                <h3 className={styles.appName}>Next chat</h3>
                <ThemeSwitch />
                <LanguageSwitch />
            </div>
        </Card>
    )
}
