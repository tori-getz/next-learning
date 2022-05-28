
import React, { useState, useEffect } from 'react';

import { SOCKET_URL } from '../../constants';

import { SocketContext } from './socket.context';

import { socket } from '../../socket';

interface ISocketProvider {
    children: React.ReactNode
}

export const SocketProvider: React.FC<ISocketProvider> = ({
    children
}) => {
    useEffect(() => {
        socket.connect({ url: SOCKET_URL });
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
