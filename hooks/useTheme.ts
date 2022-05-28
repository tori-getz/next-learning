
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme as useNextUITheme } from '@nextui-org/react';

interface IUseTheme {
    theme: string
    switchTheme: () => void
    isDark: boolean
}

export const useTheme = (): IUseTheme => {
    const { setTheme } = useNextTheme();
    const { type, isDark } = useNextUITheme();

    const theme: string = type;

    const switchTheme = (): void => {
        setTheme(isDark ? 'light' : 'dark');
    }

    return {
        theme,
        switchTheme,
        isDark: (isDark as boolean)
    }
}
