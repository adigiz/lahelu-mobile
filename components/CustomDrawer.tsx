import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Href } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { AccordionItem } from '@/types';

import Accordion from './Accordion';

const data: AccordionItem[] = [
  {
    title: 'Meme Lain',
    content: [
      { title: 'Peringkat', url: 'leaderboard' as Href<string>, icon: 'trophy-variant-outline' },
      { title: 'Tersimpan', url: 'saved' as Href<string>, icon: 'view-gallery-outline' },
      { title: 'Acak', url: 'random' as Href<string>, icon: 'shuffle' },
    ],
  },
  {
    title: 'Jelajah',
    content: [
      { title: 'Donatur', url: 'donor' as Href<string>, icon: 'account-cash-outline' },
      { title: 'Medali', url: 'medal' as Href<string>, icon: 'medal-outline' },
      { title: 'Toko Koin', url: 'shop' as Href<string>, icon: 'currency-usd' },
      { title: 'Discord', url: 'discord' as Href<string>, icon: 'disc' },
    ],
  },
];

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props}>
        <View className="flex-1 bg-white pt-2.5">
          <View className="mx-[10] flex items-center justify-center gap-1 rounded-[10] border border-gray-300 p-[10]">
            <Text className="text-center text-lg font-bold leading-tight">Mau ngepost meme kamu sendiri?</Text>
            <Text className="text-sm">Login dengan Google sekarang!</Text>
            <Pressable className="mt-2 rounded-full bg-[#65a4ec] px-[20] py-[8]">
              <Text className="font-bold text-white">Login</Text>
            </Pressable>
          </View>
          <DrawerItem labelStyle={{ fontWeight: 700, color: "black" }} label="Home" onPress={() => navigation.navigate('home')} />
          {data.map((value, index) => (
            <Accordion item={value} key={index} />
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
