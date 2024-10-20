import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type IoniconName =
  | "home"
  | "home-outline"
  | "person"
  | "person-outline"
  | "add-circle"
  | "add-circle-outline"
  | "notifications"
  | "notifications-outline"
  | "person-circle"
  | "person-circle-outline";

type TabScreen = {
  name: string;
  title: string;
  iconName: IoniconName;
};

const tabScreens: TabScreen[] = [
  { name: "index", title: "", iconName: "home" },
  { name: "home", title: "Home", iconName: "home" },
  { name: "explore", title: "Explore", iconName: "person" },
  { name: "add", title: "Add", iconName: "add-circle" },
  { name: "notification", title: "Notification", iconName: "notifications" },
  { name: "profile", title: "Profile", iconName: "person-circle" },
];

const renderTabIcon = (iconName: IoniconName, focused: boolean, color: string) => (
  <Ionicons size={24} name={focused ? iconName : `${iconName}-outline` as IoniconName} color={color} />
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabScreens.map(({ name, title, iconName }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, focused }) => renderTabIcon(iconName, focused, color),
            href: name === "index" ? null : undefined,
          }}
        />
      ))}
    </Tabs>
  );
}
