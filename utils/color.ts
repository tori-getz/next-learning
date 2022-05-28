
import random from 'random';
import type { NormalColors } from "@nextui-org/react";

export const colors: Array<NormalColors> = [ 'default', 'primary', 'secondary', 'success', 'error', 'gradient' ];

export const getRandomColor = (): NormalColors => {
    const key: number = random.int(0, (colors.length - 1));

    return colors[key];
}
