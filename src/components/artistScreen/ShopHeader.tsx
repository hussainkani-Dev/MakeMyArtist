// components/ShopHeader.tsx

import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

import {
  ArrowLeft,
  Star,
} from "lucide-react-native";

export default function ShopHeader() {
  return (
    <View>
      {/* Banner Image */}
      <View className="relative">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186",
          }}
          className="w-full h-[280px]"
          resizeMode="cover"
        />

        {/* Overlay */}
        <View className="absolute top-14 left-5 right-5 flex-row items-center justify-between">
          <TouchableOpacity className="bg-black/30 p-2 rounded-full"   onPress={() => router.back()}>
            <ArrowLeft size={22} color="#fff" />
          </TouchableOpacity>

          <View className="flex-row gap-2">
            <View className="w-2 h-2 rounded-full bg-primary-pink" />
            <View className="w-2 h-2 rounded-full bg-white/50" />
            <View className="w-2 h-2 rounded-full bg-white/50" />
          </View>
        </View>
      </View>

      {/* Shop Card */}
      <View className="bg-white -mt-6 rounded-t-[30px] px-5 pt-6 pb-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-[24px] font-bold text-black">
            Expert Spa Therapist
          </Text>

          <View className="bg-lime-100 px-4 py-1 rounded-full">
            <Text className="text-lime-700 font-semibold text-xs">
              Open
            </Text>
          </View>
        </View>

        <Text className="text-gray-400 text-sm mt-2">
          6993 Meadow Valley Terrace, New York
        </Text>

        <View className="flex-row items-center mt-3">
          <Star size={16} color="#FBBF24" fill="#FBBF24" />
          <Text className="ml-2 text-gray-600 font-medium">
            4.8 (3,279 reviews)
          </Text>
        </View>
      </View>
    </View>
  );
}