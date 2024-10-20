import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from "expo-router";
import { ColorSchemeName } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { Navigator } = createMaterialTopTabNavigator();
const HomeTopTabs = withLayoutContext(Navigator);

type TabScreen = {
    name: string;
    title: string;
};

const tabScreens: TabScreen[] = [
    { name: "index", title: "Home" },
    { name: "fresh", title: "Fresh" },
    { name: "trending", title: "Trending" },
];

const getTabBarOptions = (colorScheme: ColorSchemeName): MaterialTopTabNavigationOptions => ({
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    tabBarLabelStyle: {
        fontSize: 14,
        textTransform: "capitalize",
        fontWeight: "semibold",
    },
    tabBarIndicatorStyle: {
        height: 3,
        backgroundColor: Colors[colorScheme ?? 'light'].tint,
    },
    lazy: true,
});

const HomeLayout: React.FC = () => {
    const colorScheme = useColorScheme();
    return (
        <HomeTopTabs screenOptions={() => getTabBarOptions(colorScheme)}>
            {tabScreens.map(({ name, title }) => (
                <HomeTopTabs.Screen key={name} name={name} options={{ title }} />
            ))}
        </HomeTopTabs>
    );
};

export default HomeLayout;
