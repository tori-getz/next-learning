
import React from 'react';

import { useTranslation } from '../../hooks/useTranslation';

import { Button } from '@nextui-org/react';

interface ILanguageSwitch {
    className?: string
}

export const LanguageSwitch: React.FC<ILanguageSwitch> = ({
    className
}) => {
    const {
        language,
        t,
        setLanguage
    } = useTranslation();

    const nextLanguage: string = language === 'en' ? 'ru' : 'en';

    return (
        <Button
            className={className}
            color='gradient'
            onPress={() => setLanguage(nextLanguage)}
        >
            {t('Language')}: {language.toUpperCase()}
        </Button>
    )
}


