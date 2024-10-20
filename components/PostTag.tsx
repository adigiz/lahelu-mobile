import { Text, TouchableOpacity, View } from "react-native";

interface PostTagProps {
  tag: string;
}

const getTagColor = (tag: string): string => {
  switch (tag.toLowerCase()) {
    case 'sawer':
      return 'bg-orange-300';
    default:
      return '';
  }
};

const getBorderColor = (tag: string): string => {
  switch (tag.toLowerCase()) {
    case 'sawer':
      return 'border-orange-300';
    default:
      return 'border-gray-300';
  }
};

export default function PostTag({ tag }: PostTagProps) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        className={`overflow-hidden rounded-full border px-[10] py-[3] font-semibold ${getBorderColor(
          tag
        )} ${getTagColor(tag)}`}
      >
        <Text>{`# ${tag}`}</Text>
      </View>
    </TouchableOpacity>
  );
}
