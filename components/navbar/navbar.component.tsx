
import React, { useState } from 'react';

import {
    Button,
    Card
} from '@nextui-org/react';

import { MdMenu } from 'react-icons/md';

import { LanguageSwitch } from '../ui/language-switch.component';
import { ThemeSwitch } from '../ui/theme-switch.component'

import styles from './navbar.module.css';import { Drawer } from '../drawer/drawer.component';
;

export const Navbar: React.FC = () => {
    const [ drawerOpen, setDrawerOpen ] = useState<boolean>(false);

    return (
        <>
            <Card css={{ m: 10, position: 'fixed', zIndex: 999 }}>
                <div className={styles.wrapper}>
                    <h3 className={styles.appName}>Next chat</h3>
                    <Button
                        className={styles.burger}
                        color='gradient'
                        bordered
                        auto
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MdMenu size={28}/>
                    </Button>
                    <div className={styles.buttons}>
                        <ThemeSwitch />
                        <LanguageSwitch />
                    </div>
                </div>
            </Card>
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
        </>
    )
}
