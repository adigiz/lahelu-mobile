import { withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const { Navigator } = createMaterialTopTabNavigator();
const ExploreTopTabs = withLayoutContext(Navigator);

export default function ExploreLayout() {
    return (
        <ExploreTopTabs
            initialRouteName="index"
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
            <ExploreTopTabs.Screen
                name="index"
                options={{
                    title: "Topic",
                }}
            />

            <ExploreTopTabs.Screen
                name="join"
                options={{
                    title: "Sudah Gabung",
                }}
            />
        </ExploreTopTabs>
    );
}
