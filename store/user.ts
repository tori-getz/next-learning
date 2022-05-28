
import { createStore, createEvent } from 'effector';

import { NormalColors } from '@nextui-org/react';

export const $id = createStore<string>('');
export const $username = createStore<string>('');
export const $color = createStore<NormalColors>('default');

export const setId = createEvent<string>('set id');
export const setUsername = createEvent<string>('set username');
export const setColor = createEvent<NormalColors>('set color');

$id.on(setId, (_, id) => id);
$username.on(setUsername, (_, username) => username);
$color.on(setColor, (_, color) => color);
