import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from "expo-router";
import { ColorSchemeName } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const { Navigator } = createMaterialTopTabNavigator();
const ExploreTopTabs = withLayoutContext(Navigator);

type TabScreen = {
  name: string;
  title: string;
};

const tabScreens: TabScreen[] = [
  { name: "index", title: "Topic" },
  { name: "join", title: "Sudah Gabung" },
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
  },
  lazy: true,
});

const ExploreLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <ExploreTopTabs
      initialRouteName="index"
      screenOptions={() => getTabBarOptions(colorScheme)}
    >
      {tabScreens.map(({ name, title }) => (
        <ExploreTopTabs.Screen key={name} name={name} options={{ title }} />
      ))}
    </ExploreTopTabs>
  );
};

export default ExploreLayout;
