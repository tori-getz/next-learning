
import type { SocketClient } from "@socketzz/client";
import { useContext } from "react";
import { SocketContext } from "../context/socket/socket.context";

export const useSocket = (): SocketClient => {
    const socket = useContext(SocketContext);
    
    if (!socket) throw new Error('SocketProvider not found')

    return socket;
}
