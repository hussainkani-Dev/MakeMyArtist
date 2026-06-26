import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

type Props = {
  item: {
    title: string;
  };
  route: string;
};

export default function ListTitleCardItem({
  item,
  route,
}: Props) {
  return (
    <View className="items-center bg-white mx-4 my-5 flex-row justify-between">
      <Text className="text-lg font-bold text-black">
        {item.title}
      </Text>

      <TouchableOpacity
        className="py-2 rounded-xl justify-center items-center"
        onPress={() => router.push(route as any)}
      >
        <Text className="text-primary-pink text-center font-medium">
          View More
        </Text>
      </TouchableOpacity>
    </View>
  );
}