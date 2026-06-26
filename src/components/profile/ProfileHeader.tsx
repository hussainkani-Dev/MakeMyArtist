import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onEdit: () => void;
};

export default function ProfileHeader({ onEdit }: Props) {
  return (
    <LinearGradient colors={["#F4F4F4", "#F4F4F4"]} className="px-5 pt-14 pb-8">
      {/* Header */}
      <View className="flex-row items-center justify-center relative">
        <Text className="text-2xl font-bold text-gray-900">Profile</Text>

        <TouchableOpacity
          onPress={onEdit}
          activeOpacity={0.8}
          className="absolute right-0 w-12 h-12 bg-white rounded-2xl items-center justify-center shadow"
        >
          <Ionicons name="create-outline" size={22} color="#CF2475" />
        </TouchableOpacity>
      </View>

      {/* Avatar */}
      <View className="items-center mt-8">
        <Image
          source={require("../../../assets/finalImage/onboard_1.png")}
          className="w-28 h-28 rounded-full"
        />

        <Text className="text-2xl font-bold text-gray-800 mt-5">
          sample user
        </Text>

        <Text className="text-gray-500 mt-2 text-base">sample@email.com</Text>

        {/* Small badge */}
        <View className="bg-primary-pink px-4 py-2 rounded-full mt-5">
          <Text className="text-white font-semibold">Premium Member</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
