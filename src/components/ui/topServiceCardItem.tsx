import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { Heart } from "lucide-react-native";
import { router } from "expo-router";

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
       onPress={() => {
                  router.push("/screens/ServiceMenu");
                }}
    >
      {/* Image */}
      <View className="relative ">
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-full h-40 rounded-md border-b-2 border-primary-pink rounded-t-3xl"
        />

        {/* Heart */}
       
      </View>

      {/* Title */}
      <Text
        numberOfLines={2}
        className="text-xlg font-semibold text-primary-pink mt-3 "
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}