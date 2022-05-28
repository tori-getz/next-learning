
import React from 'react';

import { Navbar } from '../navbar/navbar.component';

import styles from './layout.module.css';

export interface ILayout {
    children: React.ReactNode
}

export const Layout: React.FC<ILayout> = ({
    children
}) => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
