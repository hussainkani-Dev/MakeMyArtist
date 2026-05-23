import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

import {
  Heart,
  Star,
} from "lucide-react-native";

type Props = {
  item?: {
    title?: string;
    category?: string;
    rating?: number;
    reviews?: number;
    priceRange?: string;
    image?: any;
  };
};

export default function RecommendationCard({ item }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="w-96 h-64 rounded-lg mx-0.5 overflow-hidden bg-white"
       onPress={() => router.push("/screens/ShopDetailsScreen")}
    >
      <ImageBackground
        source={
          item?.image ||
          require("../../../assets/dummyImages/featured-1.jpg")
        }
        resizeMode="cover"
        className="flex-1 justify-between"
      >
        {/* Top Section */}
        <View className="flex-row items-start justify-between px-4 pt-4">
          {/* Recommendation Badge */}
          <View className="bg-orange-500 px-4 py-2 rounded-full">
            <Text className="text-white text-[13px] font-semibold">
              Recommendation
            </Text>
          </View>

          {/* Heart Icon */}
          <TouchableOpacity className="w-9 h-9 rounded-full bg-black/20 items-center justify-center">
            <Heart size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Bottom Overlay */}
        <View className="bg-black/45 px-4 py-4">
          {/* Title */}
          <Text className="text-white text-lg font-semibold leading-2">
            Super S
          </Text>
          <Text className="text-gray-100 text-sm font-semibold leading-2">
            Special body massage for relaxation from home
          </Text>

          {/* Bottom Row */}
          <View className="flex-row items-center justify-between mt-1">
            {/* Left */}
            <View className="flex-row items-center">
              <Text className="text-white/90 text-xs">
                Body Care
              </Text>

              <Text className="text-white/50 mx-2 text-[15px]">
                •
              </Text>

              <Star
                size={10}
                fill="#FBBF24"
                color="#FBBF24"
              />

              <Text className="text-[#FBBF24] text-[15px] ml-1 font-semibold">
                4.4
              </Text>

              <Text className="text-white/80 text-sm ml-1">
                (453)
              </Text>
            </View>

            {/* Price */}
            <Text className="text-white text-xs font-semibold">
             AED 100 - 200
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}