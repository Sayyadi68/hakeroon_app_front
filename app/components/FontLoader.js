import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export default function FontLoader({ children }) {
    const [fontsLoaded] = useFonts({
        'Estedad-Thin': require('../../assets/fonts/Estedad-Thin.ttf'),
        'Estedad-Light': require('../../assets/fonts/Estedad-Light.ttf'),
        'Estedad-Regular': require('../../assets/fonts/Estedad-Regular.ttf'),
        'Estedad-Medium': require('../../assets/fonts/Estedad-Medium.ttf'),
        'Estedad-SemiBold': require('../../assets/fonts/Estedad-SemiBold.ttf'),
        'Estedad-Bold': require('../../assets/fonts/Estedad-Bold.ttf'),
        'Estedad-ExtraBold': require('../../assets/fonts/Estedad-ExtraBold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <View onLayout={onLayoutRootView}>{children}</View>;
} 