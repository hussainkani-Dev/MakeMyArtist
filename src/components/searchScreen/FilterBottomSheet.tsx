// components/FilterBottomSheet.tsx

import React, { useMemo, useState, useCallback } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import Slider from "@react-native-community/slider";
const services = [
  "Hair",
  "Nails",
  "Coloring",
  "Message",
  "Facials",
  "Waxing",
  "Makeup",
  "Spa",
];
import { router } from "expo-router";
const genderList = ["All", "Woman", "Men", "Kids"];

export default function FilterBottomSheet({ bottomSheetRef }: any) {
  const snapPoints = useMemo(() => ["90%"], []);

  const [selectedService, setSelectedService] = useState("Hair");

  const [selectedGender, setSelectedGender] = useState("All");

  const [distance, setDistance] = useState(10);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0}
        pressBehavior="close"
      >
        <BlurView
          intensity={60}
          tint="dark"
          style={{
            flex: 1,
          }}
        />
      </BottomSheetBackdrop>
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      handleIndicatorStyle={{
        backgroundColor: "#D0D0D0",
      }}
      backgroundStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#fff",
      }}
    >
      <BottomSheetScrollView>
        {/* Header */}
        <View className="px-5 mt-10">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => bottomSheetRef.current?.dismiss()}>
              <Text className="text-primary-pink">Cancel</Text>
            </TouchableOpacity>

            <Text className="font-bold text-lg">Filter</Text>

            <TouchableOpacity>
              <Text className="text-primary-pink">Reset</Text>
            </TouchableOpacity>
          </View>

          {/* Date */}
          <Text className="font-semibold mt-8">Available on</Text>

          <View className="flex-row justify-between items-center mt-5">
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={24} color="#CF2475" />
            </TouchableOpacity>

            <Text className="font-semibold">Jun, 2026</Text>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color="#CF2475" />
            </TouchableOpacity>
          </View>

          {/* Date Pills */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-5"
          >
            {[
              { day: "Wed", date: "9" },
              { day: "Thu", date: "10" },
              { day: "Fri", date: "11" },
              { day: "Sat", date: "12" },
              { day: "Sun", date: "13" },
              { day: "Mon", date: "14" },
              { day: "Tue", date: "15" },
              { day: "Wed", date: "16" },
              { day: "Thu", date: "17" },
              { day: "Fri", date: "18" },
            ].map((item) => (
              <TouchableOpacity
                key={item.date}
                className={`w-14 h-16 rounded-full items-center justify-center mr-3 ${
                  item.date === "10" ? "bg-primary-pink" : "bg-[#F3F5F7]"
                }`}
              >
                <Text
                  className={
                    item.date === "10"
                      ? "text-white text-xs"
                      : "text-gray-500 text-xs"
                  }
                >
                  {item.day}
                </Text>

                <Text
                  className={
                    item.date === "10"
                      ? "text-white font-bold text-2xl"
                      : "text-black font-bold text-2xl"
                  }
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Service */}
          <Text className="font-semibold mt-8">Service</Text>

          <View className="flex-row flex-wrap mt-4">
            {services.map((service) => (
              <TouchableOpacity
                key={service}
                onPress={() => setSelectedService(service)}
                className={`px-6 py-3 rounded-full border mr-3 mb-3 ${
                  selectedService === service
                    ? "bg-[#fde7fd] border-primary-pink"
                    : "bg-white border-gray-300"
                }`}
              >
                <Text
                  className={
                    selectedService === service
                      ? "text-[#1D7285]"
                      : "text-black"
                  }
                >
                  {service}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Rating */}
          <Text className="font-semibold mt-5">Rating</Text>

          <View className="flex-row items-center mt-4">
            {[1, 2, 3, 4].map((item) => (
              <Ionicons
                key={item}
                name="star"
                size={26}
                color="#FF9800"
                style={{ marginRight: 10 }}
              />
            ))}

            <Ionicons name="star" size={26} color="#D9DDE4" />

            <Text className="ml-4 text-primary-pink font-semibold">4 Star</Text>
          </View>

          {/* Service For */}
          <Text className="font-semibold mt-6">Service for</Text>

          <View className="flex-row flex-wrap mt-4">
            {genderList.map((gender) => (
              <TouchableOpacity
                key={gender}
                onPress={() => setSelectedGender(gender)}
                className={`px-8 py-3 rounded-full border mr-3 mb-3 ${
                  selectedGender === gender
                    ? "bg-[#fde7fa] border-primary-pink"
                    : "border-gray-300"
                }`}
              >
                <Text
                  className={
                    selectedGender === gender ? "text-[#1D7285]" : "text-black"
                  }
                >
                  {gender}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Distance */}
          <Text className="font-semibold mt-5">Distance</Text>

          <Slider
            minimumValue={0}
            maximumValue={20}
            value={distance}
            onValueChange={setDistance}
            minimumTrackTintColor="#CF2475"
            maximumTrackTintColor="#D5DCE5"
          />

          <View className="flex-row justify-between">
            <Text>0 km</Text>
            <Text>{distance.toFixed(0)} km</Text>
          </View>

          {/* Button */}
          <TouchableOpacity
            className="bg-secondary-purple rounded-full py-5 mt-10 mb-10"
            onPress={() => {
              bottomSheetRef.current?.dismiss();

              router.push("/screens/SuggestedServicesScreen");
            }}
          >
            <Text className="text-center text-white text-lg font-semibold">
              Show Result
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
}
