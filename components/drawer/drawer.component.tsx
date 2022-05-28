
import React from 'react';

import ModernDrawer from 'react-modern-drawer';

import cn from 'classnames';

import styles from './drawer.module.css';

import { useTheme } from '../../hooks/useTheme';

import { LanguageSwitch } from '../ui/language-switch.component';
import { ThemeSwitch } from '../ui/theme-switch.component';

interface IDrawer {
    open: boolean
    onClose: () => void
}

export const Drawer: React.FC<IDrawer> = ({
    open,
    onClose
}) => {
    const { isDark } = useTheme()

    return (
        <ModernDrawer
            open={open}
            onClose={onClose}
            direction='top'
            zIndex={1000}
        >
            <div
                className={cn(
                    styles.drawer,
                    { [styles.dark]: isDark }
                )}
            >
                <ThemeSwitch />
                <LanguageSwitch />
            </div>
        </ModernDrawer>
    )
}
