
import { useEffect } from 'react';

import type { NextPage } from "next";
import Head from "next/head";

import { useRouter } from "next/router";
import { useChat } from "../hooks/useChat";

import { SocketProvider } from "../context/socket/socket.provider";

import { ChatScreen } from "../screens/chat/chat.screen";

const ChatPage: NextPage = () => {
    const { isAuth } = useChat();

    const router = useRouter();

    useEffect(() => {
        if (!isAuth) router.push('/');
    }, []);

    return (
        <SocketProvider>
            <Head>
                <title>
                    chat page
                </title>
            </Head>
            <ChatScreen />
        </SocketProvider>
    )
}

export default ChatPage;
