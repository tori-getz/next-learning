
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

import { withFork } from 'effector-next';

import { CssBaseline } from '@nextui-org/react';

class AppDocument extends Document {
    public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

        console.log(ctx);

        return {
            ...initialProps,
            styles: initialProps.styles
        };
    }
    
    public render (): JSX.Element {
        return (
            <Html>
                <Head>
                    {CssBaseline.flush()}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

const enhance = withFork({ debug: false })

export default enhance(AppDocument);
