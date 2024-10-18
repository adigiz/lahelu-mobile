import { FlatList, View } from 'react-native';

import Post from '@/components/Post';
import posts from "@/assets/data/posts.json"

export default function HomeScreen() {
  return (
    <View className='px-2 gap-[4]'>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ gap: 4 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
