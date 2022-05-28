
import React, { createContext } from 'react';

import type { SocketClient } from '@socketzz/client';

import { socket } from '../../socket';

export const SocketContext = createContext<SocketClient | null>(null);
