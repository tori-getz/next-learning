
import React from 'react';

import { Button } from '@nextui-org/react';

import { useTranslation } from '../../hooks/useTranslation';
import { useTheme } from '../../hooks/useTheme';

export const ThemeSwitch: React.FC = () => {
    const { t } = useTranslation();

    const { theme, switchTheme } = useTheme();

    return (
        <Button
            color={'gradient'}
            bordered
            onClick={switchTheme}
        >
            {t('Theme')}: {t(`Theme__${theme}`)}
        </Button>
    )
}
