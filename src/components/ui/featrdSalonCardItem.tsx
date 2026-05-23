import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Banknote } from "lucide-react-native";
import {
  Heart,
  Star,
} from "lucide-react-native";

type Props = {
  item: {
    title?: string;
    category?: string;
    address?: string;
    rating?: number;
    reviews?: string;
    image?: any;
  };
};

export default function FeatrdSalonCardItem({
  item,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="w-64 bg-white rounded-3xl mx-2 border border-orange-200  overflow-hidden"
    
    >
      {/* IMAGE SECTION */}
      <View className="relative">
        <Image
          source={
            item?.image ||
            require("../../../assets/dummyImages/featured-1.jpg")
          }
          className="w-full h-52"
          resizeMode="cover"
        />

        {/* Favorite Icon */}
        <View className="absolute top-4 right-4 bg-white p-2 rounded-xl items-center justify-center">
          <View className="flex-row items-center">
          <Star
            size={12}
            color="#F59E0B"
            fill="#F59E0B"
          />

          <Text className="text-black text-sm font-bold ml-2">
            {item?.rating || "4.7"}
          </Text>

         
        </View>
        </View>
      </View>

      {/* BODY */}
      <View className="p-4">
        {/* Category */}
        <Text className="text-orange-500 text-base font-medium mb-2">
          {item?.category || "Hair . Facial . 2+"}
        </Text>

        {/* Salon Name */}
        <Text
          numberOfLines={1}
          className="text-black text-lg font-bold mb-2"
        >
          {item?.title || "Plush Beauty Lounge"}
        </Text>

        {/* Address */}
        <Text
          numberOfLines={1}
          className="text-gray-500 text-base mb-4"
        >
          {item?.address ||
            "2607 Haymond Rocks . Dubai"}
        </Text>

        {/* Rating */}
        <View className="flex-row items-center">
          <Banknote
            size={18}
            color="#F59E0B"
           
          />

         <Text className="text-black text-base font-medium ml-2">
  From AED 149
</Text>

         
        </View>
      </View>
    </TouchableOpacity>
  );
}