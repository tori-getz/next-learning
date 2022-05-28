
import React from 'react';

import { Button } from '@nextui-org/react';

import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from '../../hooks/useTheme';

interface IThemeSwitch {
    className?: string 
}

export const ThemeSwitch: React.FC<IThemeSwitch> = ({
    className
}) => {
    const { t } = useTranslation();

    const { theme, switchTheme } = useTheme();

    return (
        <Button
            className={className}
            color={'gradient'}
            bordered
            onPress={switchTheme}
        >
            {t('Theme')}: {t(`Theme__${theme}`)}
        </Button>
    )
}
