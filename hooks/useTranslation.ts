
import { useRouter } from 'next/router';

import { translations } from '../locale';

interface IUseTranslation {
    language: string
    t: (key: string) => string,
    setLanguage: (lang: string) => void
}

export const useTranslation = (): IUseTranslation => {
    const router = useRouter();

    const language: string = router.locale || '';

    const translate = (key: string): string => {
        return translations[language][key] || key;
    }

    const { pathname, query, asPath } = router;

    const setLanguage = (lang: string) => {
        router.push(
            { pathname, query },
            asPath,
            { locale: lang }
        );
    }

    return {
        language,
        t: translate,
        setLanguage
    };
}
