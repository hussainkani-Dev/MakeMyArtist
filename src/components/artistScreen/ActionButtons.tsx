// components/ActionButtons.tsx

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import {
  Phone,
  MapPin,
  Send,
} from "lucide-react-native";

const actions = [
  {
    title: "Call",
    icon: Phone,
  },
  {
    title: "Direction",
    icon: MapPin,
  },
  {
    title: "Share",
    icon: Send,
  },
];

export default function ActionButtons() {
  return (
    <View className="flex-row justify-around mt-5 px-5">
      {actions.map((item, index) => {
        const Icon = item.icon;

        return (
          <View key={index} className="items-center">
            <TouchableOpacity className="w-14 h-14 rounded-full bg-orange-500 items-center justify-center">
              <Icon size={22} color="#fff" />
            </TouchableOpacity>

            <Text className="mt-2 text-gray-600 font-medium">
              {item.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
}