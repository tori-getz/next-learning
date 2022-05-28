
import { createStore, createEvent } from 'effector-next';

import { NormalColors } from '@nextui-org/react';

export const $username = createStore<string>('');
export const $color = createStore<NormalColors>('default');

export const setUsername = createEvent<string>('set username');
export const setColor = createEvent<NormalColors>('set color');

$username.on(setUsername, (_, username) => username);
$color.on(setColor, (_, color) => color);
