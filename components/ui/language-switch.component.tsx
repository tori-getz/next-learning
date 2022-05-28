
import React from 'react';

import { useTranslation } from '../../hooks/useTranslation';

import { Button } from '@nextui-org/react';

export const LanguageSwitch: React.FC = () => {
    const {
        language,
        t,
        setLanguage
    } = useTranslation();

    const nextLanguage: string = language === 'en' ? 'ru' : 'en';

    return (
        <Button
            color='gradient'
            onClick={() => setLanguage(nextLanguage)}
        >
            {t('Language')}: {language.toUpperCase()}
        </Button>
    )
}


