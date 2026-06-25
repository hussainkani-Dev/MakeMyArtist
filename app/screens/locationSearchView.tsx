import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import FilterBottomSheet from "@/src/components/searchScreen/FilterBottomSheet";
const recentSearches = ["Hair service", "Nail", "Wax"];

const popularSearches = ["Hair", "Nails", "Coloring", "Massage", "Facials"];

const salons = [
  {
    id: "1",
    name: "Sophisticated Salon",
    category: "Hair . Facial",
    address: "360 Stillwater Rd. Palm City",
    rating: "4.7",
    reviews: "2.7k",
    offer: "-58%",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
  },
  {
    id: "2",
    name: "Lovely Leather",
    category: "Hair . Facial",
    address: "Palm City",
    rating: "4.8",
    reviews: "1.9k",
    offer: "-45%",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
  },
];

export default function SearchScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const [search, setSearch] = useState("");

  const filteredSalons = salons.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <BottomSheetModalProvider>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>

          <Text className="text-lg font-semibold">Search</Text>

          <TouchableOpacity onPress={() => bottomSheetRef.current?.present()}>
            <Ionicons name="options-outline" size={22} color="#CF2475" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {/* Search Bar */}
          <View className="px-4">
            <View className="flex-row items-center bg-[#fcecfa] rounded-full px-4 h-14">
              <Ionicons name="search-outline" size={22} color="#CF2475" />

              <TextInput
                placeholder="Search salon or service..."
                placeholderTextColor="#A0A0A0"
                value={search}
                onChangeText={setSearch}
                className="flex-1 ml-3 text-black"
              />
            </View>
          </View>

          {/* Search Result */}
          {search.length > 0 && (
            <View className="mx-4 mt-2 bg-white rounded-xl border border-gray-200">
              {filteredSalons.length > 0 ? (
                <FlatList
                  scrollEnabled={false}
                  data={filteredSalons}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className="p-4 border-b border-gray-100"
                       onPress={() => {
                  router.push("/screens/ShopDetails");
                }}
                    >
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <View className="py-6 items-center">
                  <Ionicons name="search-outline" size={30} color="#B0B0B0" />
                  <Text className="text-gray-400 mt-2">No results found</Text>
                </View>
              )}
            </View>
          )}

          {/* Recents */}
          <View className="px-4 mt-6">
            <View className="flex-row justify-between items-center">
              <Text className="text-gray-400">Recents</Text>

              <TouchableOpacity>
                <Text className="text-primary-pink">Clear all</Text>
              </TouchableOpacity>
            </View>

            {recentSearches.map((item, index) => (
              <TouchableOpacity
               onPress={() => {
                  router.push("/screens/SuggestedServicesScreen");
                }}
                key={index}
                className="flex-row justify-between items-center py-4 border-b border-gray-100"
              >
                <Text>{item}</Text>

                <Ionicons name="close" size={18} color="#B0B0B0" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Popular Search */}
          <View className="px-4 mt-6">
            <Text className="text-xl font-semibold">Popular Search</Text>

            <View className="flex-row flex-wrap mt-4">
              {popularSearches.map((item) => (
                <TouchableOpacity
                 onPress={() => {
                  router.push("/screens/ShopDetails");
                }}
                  key={item}
                  className="bg-[#fde6f8] rounded-full px-6 py-3 mr-3 mb-3"
                >
                  <Text className="text-primary-pink">{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Suggestions */}
          <View className="px-4 mt-4">
            <Text className="text-xl font-semibold mb-4">
              Suggestion for you
            </Text>

            {salons.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  router.push("/screens/ShopDetails");
                }}
                key={item.id}
                className="flex-row bg-white border border-gray-100 rounded-2xl mb-4 overflow-hidden"
              >
                <Image source={{ uri: item.image }} className="w-28 h-28" />

                <View className="flex-1 p-3">
                  <Text className="text-xs text-primary-pink">
                    {item.category}
                  </Text>

                  <Text numberOfLines={1} className="text-lg font-bold mt-1">
                    {item.name}
                  </Text>

                  <Text numberOfLines={1} className="text-gray-400 mt-1">
                    {item.address}
                  </Text>

                  <View className="flex-row items-center mt-3">
                    <Ionicons name="star" size={15} color="#F5A623" />

                    <Text className="font-semibold ml-1">{item.rating}</Text>

                    <Text className="text-gray-400 ml-1">({item.reviews})</Text>

                    <Ionicons
                      name="pricetag"
                      size={14}
                      color="#E05E7A"
                      style={{ marginLeft: 15 }}
                    />

                    <Text className="ml-1 text-gray-500">{item.offer}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>

      <FilterBottomSheet bottomSheetRef={bottomSheetRef} />
    </BottomSheetModalProvider>
  );
}
