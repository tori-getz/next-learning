
import '../styles/globals.css';

import React from "react";
import type { AppProps } from "next/app";

const App: React.FC<AppProps> = ({
    Component,
    pageProps
}) => {
    return (
        <>
            <h1>next example</h1>
            <Component {...pageProps} />
        </>
    )
}

export default App;
