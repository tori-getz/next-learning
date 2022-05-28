
import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from '../hooks/useTranslation';

import { HomeScreen } from '../screens/home/home.screen';

const HomePage: NextPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>
                    {t('Main')}
                </title>
            </Head>
            <HomeScreen />
        </>
    )
}

export default HomePage;
