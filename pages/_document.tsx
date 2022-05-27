
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

class AppDocument extends Document {
    public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    public render (): JSX.Element {
        return (
            <Html lang="ru">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument;
