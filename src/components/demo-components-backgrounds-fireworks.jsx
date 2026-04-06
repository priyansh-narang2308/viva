'use client';

import { useTheme } from 'next-themes';
import { FireworksBackground } from '@/components/animate-ui/components/backgrounds/fireworks';


export default function FireworksBackgroundDemo({
    population,
}) {
    const { resolvedTheme: theme } = useTheme();

    return (
        <FireworksBackground
            className="absolute inset-0 flex items-center justify-center rounded-xl"
            color={theme === 'dark' ? 'white' : 'black'}
            population={population}
        />
    );
}