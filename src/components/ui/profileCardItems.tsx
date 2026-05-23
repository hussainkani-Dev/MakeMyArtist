import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  item: {
    title: string;
    icon: any;
  };
  onPress: (item: any) => void;
};

export default function ProfileCardItems({
  item,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(item)}
      className="flex-row items-center justify-between py-5 border-b border-gray-200"
    >
      {/* Left Side */}
      <View className="flex-row items-center">
        <Ionicons
          name={item.icon}
          size={22}
          color="#000"
        />

        <Text className="text-[16px] text-black ml-4 font-medium">
          {item.title}
        </Text>
      </View>

      {/* Right Arrow */}
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#A1A1AA"
      />
    </TouchableOpacity>
  );
}