import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  item: {
    title: string;
  };
  onPress: (item: any) => void;
};

export default function ListTitleCardItem({
  item,
  onPress,
}: Props) {
  return (
    <View className="items-center bg-white mx-4 my-5 flex-row justify-between">
      <Text className="text-lg font-bold text-black">
        {item.title}
      </Text>

      <TouchableOpacity
        className="  py-2 rounded-xl  justify-center items-center"
        onPress={() => onPress(item)}
      >
        <Text className="text-orange-500 text-center font-medium">
          View More
        </Text>
      </TouchableOpacity>
    </View>
  );
}