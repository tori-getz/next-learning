
import 'react-modern-drawer/dist/index.css';

import React from "react";

import type { AppProps } from "next/app";

import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

import { LightTheme } from "../themes/light.theme";
import { DarkTheme } from "../themes/dark.theme";

import { Layout } from "../components/layout/layout.component";

const App: React.FC<AppProps> = ({
    Component,
    pageProps
}) => {
    return (
        <ThemeProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: LightTheme.className,
                dark: DarkTheme.className
            }}
        >
            <NextUIProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </NextUIProvider>
        </ThemeProvider>
    )
}

export default App;
