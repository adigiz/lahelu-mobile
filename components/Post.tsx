import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import date from "@/utils/date";
import PostTag from "./PostTag";
import VideoPlayer from "./VideoPlayer";

interface PostProps {
    item: {
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
    };
    isVisible: boolean;
}

export default function Post({ item, isVisible }: PostProps) {
    const isVideo = item.type === "video"
    return (
        <View className="w-full py-[10] bg-white">
            <View className="flex flex-row items-center px-[10] pb-[10]">
                <View className="h-[30] w-[30] rounded-[30] overflow-hidden">
                    <Image
                        source={{ uri: item.user.image_url }}
                        className="h-[30] w-[30]"
                    />
                </View>
                <Text className="ml-[10] text-xs font-semibold">{item.user.username}</Text>
                <Text className="ml-[10] text-xs font-extralight">{date.timeAgo(item.uploaded_date)}</Text>
            </View>
            <View className="flex">
                <Text className="px-[10] text-lg font-semibold">{item.title}</Text>
                {isVideo ? <VideoPlayer uri={item.file_url} isPlaying={isVisible} /> : <Image source={{ uri: item.file_url }} className="w-full aspect-square" />}
            </View>
            <View className="flex flex-row p-[10]">
                <FlatList
                    contentContainerStyle={{ gap: 5 }}
                    data={item.tags}
                    renderItem={({ item }) => <PostTag tag={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View className="px-[10] flex flex-row justify-between">
                <View className="flex flex-row gap-[8]">
                    <View className="flex flex-row">
                        <TouchableOpacity>
                            <View className="flex flex-row items-center gap-[4] p-[8] border border-gray-500 rounded-l-[5]">
                                <MaterialCommunityIcons name="arrow-up-bold-outline" size={20} color="black" />
                                <Text>{item.analytics.upvote}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View className="flex flex-row items-center p-[8] border-t border-b border-r border-gray-500 rounded-r-[5]">
                                <MaterialCommunityIcons name="arrow-down-bold-outline" size={20} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <View className="flex flex-row items-center p-[8] border border-gray-500 rounded-[5] gap-[4]">
                            <MaterialIcons name="comment" size={20} color="black" />
                            <Text>{item.analytics.total_comments}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View className="flex flex-row items-center p-[8] border border-gray-500 rounded-[5] gap-[4]">
                        <MaterialCommunityIcons name="share" size={20} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}