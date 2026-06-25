import React, { useMemo, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";

export default function ShopDetails() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["85%"], []);

  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <BottomSheetModalProvider>
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200",
          }}
          resizeMode="cover"
          className="flex-1"
        >
          <SafeAreaView className="flex-1 pt-14">
            {/* Header */}
            <View className="flex-row justify-between items-center px-6 pt-4">
              <TouchableOpacity
                onPress={() => router.back()}
                className="w-12 h-12 rounded-full bg-white/90 justify-center items-center"
              >
                <Ionicons name="chevron-back" size={24} color="#CF2475" />
              </TouchableOpacity>
            </View>

            {/* Card */}
            <View className="flex-1 justify-end mb-14 p-4">
              <View className="bg-white rounded-[35px] px-6 pt-6 pb-10">
                <View className="flex-row justify-between">
                  <Text className="text-primary-pink">
                    Hair · Facial · Nails · 24+
                  </Text>
                  <View className="bg-yellow-100 rounded-full px-3 py-1">
                    <Text className="text-yellow-600 font-bold">OPEN</Text>
                  </View>
                </View>

                <Text className="text-3xl font-bold mt-3">
                  Plush Beauty Lounge
                </Text>

                <Text className="text-gray-500 mt-2">
                  360 Stillwater Rd. Palm City, FL
                </Text>

                <View className="flex-row items-center mt-5">
                  <FontAwesome name="star" color="#F59E0B" size={15} />
                  <Text className="ml-2 font-semibold">4.7</Text>
                  <Text className="text-gray-400 ml-1">(2.7k)</Text>
                  <View className="mx-4 w-[1px] h-4 bg-gray-300" />
                  <Text className="text-primary-pink font-bold">-58%</Text>
                  <Text className="text-gray-500 ml-1">(6 pax available)</Text>
                </View>

                <TouchableOpacity
                  onPress={() => router.push("/screens/ShopInfo")}
                  className="bg-secondary-purple h-14 rounded-full justify-center items-center mt-8"
                >
                  <Text className="text-white text-lg font-bold">
                    View More Details
                  </Text>
                </TouchableOpacity>
              </View>

              {/* View More */}
            </View>
          </SafeAreaView>
        </ImageBackground>
      </>
    </BottomSheetModalProvider>
  );
}
