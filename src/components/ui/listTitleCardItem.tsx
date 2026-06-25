import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
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
        onPress={() => {
                  router.push("/screens/BookingScreen");
                }}
      >
        <Text className="text-primary-pink text-center font-medium">
          View More
        </Text>
      </TouchableOpacity>
    </View>
  );
}