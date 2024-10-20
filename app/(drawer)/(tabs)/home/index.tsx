import { useCallback,useRef, useState } from 'react';
import { ActivityIndicator,FlatList, ListRenderItemInfo, View, ViewToken } from 'react-native';

import posts from "@/assets/data/posts.json";
import Post from '@/components/Post';

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
  const [data, setData] = useState<PostItem[]>(posts as PostItem[]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef<FlatList<PostItem>>(null);

  const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken<PostItem>[] }) => {
    if (viewableItems.length > 0) {
      const centeredItemIndex = viewableItems[0]?.index;
      setVisiblePostIndex(centeredItemIndex ?? null);
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
  };

  const loadMorePosts = useCallback(async () => {
    if (loading) return;
    
    setLoading(true);
    
    const newPosts: PostItem[] = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts as PostItem[]);
      }, 1500);
    });

    setData(prevData => [...prevData, ...newPosts]);
    setLoading(false);
  }, [loading]);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  return (
    <View className="gap-[4] px-2">
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({ item, index }: ListRenderItemInfo<PostItem>) => (
          <Post item={item} isVisible={index === visiblePostIndex} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 4 }}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onEndReached={loadMorePosts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}
