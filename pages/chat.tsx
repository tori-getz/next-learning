
import type { NextPage } from "next";
import Head from "next/head";

import { useTranslation } from '../hooks/useTranslation';
import { useChat } from '../hooks/useChat';

const ChatPage: NextPage = () => {
    const { user } = useChat();

    return (
        <>
            <Head>
                <title>
                    chat page
                </title>
            </Head>
            <h1>chat page</h1>
            <p>{JSON.stringify(user)}</p>
        </>
    )
}

export default ChatPage
