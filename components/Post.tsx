import { Image, View } from "react-native";
import posts from "@/assets/data/posts.json"

export default function Post() {
    return (
        <View className="w-full">
            <Image source={{ uri: "https://fastly.picsum.photos/id/362/200/300.jpg?hmac=YjZiJWaqrdKL4xFhgrjDw4Ic2tPzNLV975FWRb8td0s" }} 
            className="w-full aspect-square" />
        </View>
    )
}