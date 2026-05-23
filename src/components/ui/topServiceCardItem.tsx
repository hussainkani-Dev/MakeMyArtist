import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { Heart } from "lucide-react-native";

type Props = {
  item: {
    id: number;
    title: string;
    image: any;
  };
};

export default function TopServiceCardItem({
  item,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="w-[48%] mb-3"
    >
      {/* Image */}
      <View className="relative ">
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-full h-40 rounded-md border-b-2 border-orange-700 rounded-t-3xl"
        />

        {/* Heart */}
       
      </View>

      {/* Title */}
      <Text
        numberOfLines={2}
        className="text-xlg font-semibold text-[#1E1E1E] mt-3 "
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}