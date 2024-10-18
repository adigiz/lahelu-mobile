import { FlatList, View, ListRenderItemInfo, ViewToken } from 'react-native';
import { useRef, useState } from 'react';
import Post from '@/components/Post';
import posts from "@/assets/data/posts.json";

interface PostItem {
  id: string;
  type: string;
  title: string;
  user: {
    username: string;
    image_url: string;
  };
  file_url: string;
  uploaded_date: string;
  tags: string[];
  analytics: {
    upvote: number;
    total_comments: number;
  };
}

export default function HomeScreen() {
  const [visiblePostIndex, setVisiblePostIndex] = useState<number | null>(null);
  const flatListRef = useRef<FlatList<PostItem>>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken<PostItem>[] }) => {
    if (viewableItems.length > 0) {
      const centeredItemIndex = viewableItems[0]?.index;
      setVisiblePostIndex(centeredItemIndex ?? null);
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View className="px-2 gap-[4]">
      <FlatList
        ref={flatListRef}
        data={posts as PostItem[]}
        renderItem={({ item, index }) => (
          <Post item={item} isVisible={index === visiblePostIndex} />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ gap: 4 }}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
}
