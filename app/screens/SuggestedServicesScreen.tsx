import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const services = [
  {
    id: "1",
    title: "Sophisticated Salon",
    category: "Hair • Facial",
    address: "360 Stillwater Rd. Palm City, FL",
    rating: "4.7",
    reviews: "2.7k",
    distance: "2.5 km",
    discount: "-58% OFF",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500",
  },
  {
    id: "2",
    title: "Lovely Leather",
    category: "Hair • Facial",
    address: "Palm City, FL",
    rating: "4.8",
    reviews: "1.9k",
    distance: "3.1 km",
    discount: "-45% OFF",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500",
  },
  {
    id: "3",
    title: "Glow Beauty Lounge",
    category: "Nails • Spa",
    address: "123 Ocean Blvd. Palm City",
    rating: "4.6",
    reviews: "1.2k",
    distance: "1.8 km",
    discount: "-30% OFF",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500",
  },
  {
    id: "4",
    title: "Relax & Revive Spa",
    category: "Massage • Spa",
    address: "500 Ocean Dr. Palm City",
    rating: "4.9",
    reviews: "3.4k",
    distance: "4.2 km",
    discount: "-40% OFF",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500",
  },
];

export default function SuggestedServicesScreen() {
  return (
    <SafeAreaView className="flex-1 pt-14 bg-[#FAFAFA]">
      {/* Header */}
      <View className="flex-row items-center gap-20 px-5 pt-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>

        <Text className="text-[22px] font-bold text-black">
          Suggested Services
        </Text>

        {/* <View className="flex-row">
          <TouchableOpacity className="mr-4">
            <Ionicons name="map-outline" size={23} color="#444" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="options-outline" size={23} color="#E91E63" />
          </TouchableOpacity>
        </View> */}
      </View>

      {/* Search */}
      <View className="flex-row items-center px-5 mt-6">
        <View className="flex-1 h-12 bg-white rounded-full border border-gray-200 flex-row items-center px-4">
          <Ionicons name="search" size={20} color="#E91E63" />

          <TextInput
            placeholder="Search salon or service..."
            placeholderTextColor="#999"
            className="flex-1 ml-3 text-[15px]"
          />
        </View>

        {/* <TouchableOpacity className="ml-3 bg-pink-100 rounded-full px-5 h-12 flex-row items-center">
          <Ionicons name="filter" size={18} color="#E91E63" />
          <Text className="ml-2 font-semibold text-pink-600">
            Filter
          </Text>
        </TouchableOpacity> */}
      </View>

      {/* Result */}
      <View className="flex-row justify-between items-center px-5 mt-5 mb-2">
        <Text className="text-[15px]">
          <Text className="text-pink-600 font-bold">125</Text> Results Found
        </Text>

        {/* <Text className="text-[15px]">
          Sort by{" "}
          <Text className="text-pink-600 font-semibold">
            Popular ▼
          </Text>
        </Text> */}
      </View>

      {/* List */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 18, paddingBottom: 30 }}
        renderItem={({ item }) => (
          <View className="bg-white rounded-3xl p-3 mb-4 shadow-sm border border-gray-100 flex-row">
            {/* Image */}
            <View>
              <Image
                source={{ uri: item.image }}
                className="w-28 h-32 rounded-2xl"
              />

              <TouchableOpacity className="absolute top-2 left-2 bg-white w-9 h-9 rounded-full justify-center items-center">
                <Ionicons name="heart" size={18} color="#E91E63" />
              </TouchableOpacity>
            </View>

            {/* Details */}
            <View className="flex-1 ml-4 justify-between">
              <View>
                <Text className="text-sky-600 text-xs font-semibold">
                  {item.category}
                </Text>

                <Text className="text-[19px] font-bold text-gray-900 mt-1">
                  {item.title}
                </Text>

                <View className="flex-row items-center mt-2">
                  <Ionicons name="location-outline" size={14} color="#999" />
                  <Text className="text-gray-500 text-xs ml-1 flex-1">
                    {item.address}
                  </Text>
                </View>

                <View className="flex-row items-center mt-3">
                  <View className="flex-row items-center mr-5">
                    <FontAwesome name="star" size={13} color="#FDBA21" />

                    <Text className="text-xs text-gray-600 ml-1">
                      {item.rating} ({item.reviews})
                    </Text>
                  </View>

                  <View className="flex-row items-center">
                    <MaterialIcons
                      name="local-offer"
                      size={14}
                      color="#0EA5E9"
                    />

                    <Text className="text-xs text-gray-600 ml-1">
                      {item.distance}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Bottom */}
              <View className="flex-row items-center justify-between mt-3">
                <View className="bg-pink-50 px-3 py-1 rounded-md">
                  <Text className="text-pink-600 font-semibold text-xs">
                    {item.discount}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => router.push("/screens/ShopDetails")}
                  className="border border-pink-500 rounded-full px-5 py-2"
                >
                  <Text className="text-pink-500 font-semibold">Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
}
