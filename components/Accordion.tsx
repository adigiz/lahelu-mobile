import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AccordionContent, AccordionItem } from '@/types';

import Caret from './Caret';

type AccordionProps = {
  item: AccordionItem;
};

const Accordion = ({ item }: AccordionProps) => {
  const listRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  const toggleAccordion = () => {
    if (heightValue.value === 0) {
      runOnUI(() => {
        'worklet';
        const measuredHeight = measure(listRef)?.height || 0;
        heightValue.value = withTiming(measuredHeight);
      })();
    } else {
      heightValue.value = withTiming(0);
    }
    open.value = !open.value;
  };

  return (
    <View style={{ marginHorizontal: 10, overflow: 'hidden' }}>
      <Pressable
        onPress={toggleAccordion}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
        <Caret progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listRef} style={{ position: 'absolute', top: 0, width: '100%' }}>
          {item.content.map((v: AccordionContent, i: number) => (
            <Link href={v.url} key={i} asChild>
              <Pressable
                key={i}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                }}
              >
                <MaterialCommunityIcons name={v.icon} size={20} color="black" />
                <Text style={{ marginLeft: 10 }}>{v.title}</Text>
              </Pressable>
            </Link>
          ))}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;
