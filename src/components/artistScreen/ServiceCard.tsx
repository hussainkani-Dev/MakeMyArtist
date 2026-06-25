// components/ServiceCard.tsx

import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";

type Props = {
  title: string;
  types: string;
  image: string;
};

export default function ServiceCard({
  title,
  types,
  image,
}: Props) {
  return (
    <View className="w-[48%] bg-white rounded-3xl p-2 border border-primary-pink mb-4">
      <Image
        source={{ uri: image }}
        className="w-full h-[120px] rounded-2xl"
        resizeMode="cover"
      />

      <Text className="text-black font-semibold text-base mt-3">
        {title}
      </Text>

      <Text className="text-gray-400 mt-1">
        {types}
      </Text>
    </View>
  );
}