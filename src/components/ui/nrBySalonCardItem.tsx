import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  Heart,
  Star,
  TicketPercent,
} from "lucide-react-native";

type Props = {
  item: {
    title?: string;
    rating?: number;
    reviews?: string;
    distance?: string;
    discount?: string;
    address?: string;
    category?: string;
    image?: any;
  };
  onPress: (item: any) => void;
};
import { router } from "expo-router";
export default function NrBySalonCardItem({
  item,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
                     onPress={() => router.push("/screens/ShopDetails")}
     
      className="bg-white rounded-3xl mx-4 my-3 overflow-hidden flex-row shadow-lg"
      style={{
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      }}
    >
      {/* LEFT IMAGE SECTION */}
      <View className="relative">
        <Image
          source={
            item?.image ||
            require("../../../assets/dummyImages/nearby-1.jpg")
          }
          className="w-36 h-36"
          resizeMode="cover"
        />

        {/* Favorite Button */}
        <View className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white items-center justify-center">
          <Heart
            size={14}
            color="#CF2475"
            fill="#EA580C"
          />
        </View>

        {/* Distance Badge */}
        <View className="absolute bottom-5 left-0 bg-[#ffe6fb] px-3 py-2 rounded-r-full">
          <Text className="text-primary-pink font-bold text-sm">
            {item?.distance || "1,1km"}
          </Text>
        </View>
      </View>

      {/* RIGHT CONTENT */}
      <View className="flex-1 px-5 py-2 justify-between">
        <View>
          {/* Category */}
          <Text className="text-primary-pink text-base font-medium mb-1">
            {item?.category || "Hair . Facial"}
          </Text>

          {/* Title */}
          <Text className="text-black text-lg font-bold mb-1">
            {item?.title || "Sophisticated Salon"}
          </Text>

          {/* Address */}
          <Text
            numberOfLines={1}
            className="text-gray-500 text-base"
          >
            {item?.address ||
              "360 Stillwater Rd. Palm City.."}
          </Text>
        </View>

        {/* Bottom Row */}
        <View className="flex-row items-center justify-between mt-1">
          {/* Rating */}
          <View className="flex-row items-center">
            <Star
              size={14}
              color="#F59E0B"
              
            />

            <Text className="text-black text-sm font-bold ml-2">
              {item?.rating || "4.7"}
            </Text>

            <Text className="text-gray-500 text-sm ml-2">
              ({item?.reviews || "2.7k"})
            </Text>
          </View>

          {/* Discount */}
          <View className="flex-row items-center">
            <TicketPercent
              size={14}
              color="#0F766E"
             
            />

            <Text className="text-gray-700 text-sm ml-2">
              {item?.discount || "-58%"}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}