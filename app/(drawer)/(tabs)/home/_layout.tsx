import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const { Navigator } = createMaterialTopTabNavigator();
const HomeTopTabs = withLayoutContext(Navigator);

export default function HomeLayout() {
    return (
        <HomeTopTabs
            screenOptions={() => ({
                tabBarLabelStyle: {
                    fontSize: 14,
                    textTransform: "capitalize",
                    fontWeight: "semibold",
                },
                tabBarIndicatorStyle: {
                    height: 3,
                },
                lazy: true,
            })}
        >
            <HomeTopTabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />

            <HomeTopTabs.Screen
                name="fresh"
                options={{
                    title: "Fresh",
                }}
            />
            <HomeTopTabs.Screen
                name="trending"
                options={{
                    title: "Trending",
                }}
            />
        </HomeTopTabs>
    );
}
