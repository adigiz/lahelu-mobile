import React from 'react';
import { Image } from 'react-native';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';


type Props = {
  progress: Readonly<SharedValue<0 | 1>>;
};

const Caret = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));
  return (
    <Animated.View style={iconStyle}>
      <Image source={require("../assets/images/caret-down.png")} className={`size-[16]`} />
    </Animated.View>
  );
};

export default Caret;