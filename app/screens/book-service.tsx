import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function BookServiceScreen() {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const services = [
    {
      id: "1",
      title: "Woman Blunt Cut",
      price: "$50",
      category: "Hair service",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
    },
    {
      id: "2",
      title: "Manicure",
      price: "$50",
      category: "Nail service",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600",
    },
  ];

  const specialists = [
    {
      id: "1",
      name: "Ronald",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      active: true,
    },
    {
      id: "2",
      name: "Merry",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "3",
      name: "Bella",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: "4",
      name: "Joseph",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  const dates = [
    { day: "Wed", num: 9 },
    { day: "Thu", num: 10 },
    { day: "Fri", num: 11 },
    { day: "Sat", num: 12 },
    { day: "Sun", num: 13 },
    { day: "Mon", num: 14 },
  ];

  const times = ["08:00 AM", "10:00 AM", "11:00 AM", "01:00 PM"];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-16 pb-5 px-5 rounded-b-3xl">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center"
          >
            <Ionicons name="chevron-back" size={24} color="#111" />
          </TouchableOpacity>

          <Text className="text-[17px] font-semibold">Book Service</Text>

          <View className="w-6" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="px-4">
        {/* Services */}
        <View className="mt-5">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="font-semibold text-base">Your Services Order</Text>

            <TouchableOpacity>
              <Text className="text-primary-pink font-medium">+ Add more</Text>
            </TouchableOpacity>
          </View>

          {services.map((item) => (
            <View key={item.id} className="flex-row items-center mb-4">
              <Image
                source={{ uri: item.image }}
                className="w-14 h-14 rounded-xl"
              />

              <View className="flex-1 ml-3">
                <Text className="font-semibold text-[15px]">{item.title}</Text>

                <Text className="text-primary-pink font-semibold">
                  {item.price}
                  <Text className="text-gray-400 font-normal">
                    {" "}
                    • {item.category}
                  </Text>
                </Text>
              </View>

              <TouchableOpacity className="w-8 h-8 rounded-full border border-primary-pink items-center justify-center">
                <Ionicons name="remove" size={18} color="#ff4d4d" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Specialists */}
        <Text className="font-semibold text-base mb-4">Specialist</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {specialists.map((item) => (
            <View key={item.id} className="items-center mr-5">
              <View
                className={`w-16 h-16 rounded-full p-[2px] ${
                  item.active ? "border-2 border-primary-pink" : ""
                }`}
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full rounded-full"
                />
              </View>

              {item.active && (
                <View className="absolute top-10 left-10 bg-white rounded-full p-1">
                  <Ionicons name="checkmark" size={12} color="#06b6d4" />
                </View>
              )}

              <Text className="mt-2 text-xs">{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Date */}
        <Text className="font-semibold text-base mt-6">Date</Text>

        <View className="flex-row justify-between items-center mt-4">
          <Ionicons name="chevron-back" size={22} color="#0f172a" />

          <Text className="font-medium text-gray-800">March, 2021</Text>

          <Ionicons name="chevron-forward" size={22} color="#0f172a" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5"
        >
          {dates.map((item, index) => {
            const active = selectedDate === index;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDate(index)}
                className={`w-16 h-20 rounded-3xl mr-3 items-center justify-center ${
                  active ? "bg-primary-pink" : "bg-white"
                }`}
              >
                <Text
                  className={`text-xs ${
                    active ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.day}
                </Text>

                <Text
                  className={`text-xl font-bold mt-1 ${
                    active ? "text-white" : "text-black"
                  }`}
                >
                  {item.num}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Time */}
        <Text className="font-semibold text-base mt-6">Time</Text>

        <View className="flex-row flex-wrap mt-4">
          {times.map((time) => {
            const active = selectedTime === time;

            return (
              <TouchableOpacity
                key={time}
                onPress={() => setSelectedTime(time)}
                className={`px-5 py-3 rounded-full border mr-3 mb-3 ${
                  active
                    ? "border-primary-pink bg-[#ffebfb]"
                    : "border-gray-300 bg-white"
                }`}
              >
                <Text
                  className={`${active ? "text-primary-pink" : "text-black"}`}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Notes */}
        <Text className="font-semibold text-base mt-3">Notes</Text>

        <TextInput
          multiline
          placeholder="Type your notes here"
          className="bg-white h-28 rounded-2xl mt-4 p-4 text-gray-700"
        />

        <View className="h-28" />
      </ScrollView>

      {/* Bottom Checkout */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4 flex-row items-center justify-between rounded-t-3xl">
        <View>
          <Text className="text-gray-400 text-xs">Total (1 Service)</Text>

          <Text className="text-2xl font-bold text-primary-pink">
            $40 <Text className="text-sm text-gray-400 line-through">$10</Text>
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/screens/BookingCheckout")}
          className="bg-secondary-purple px-10 py-4 rounded-full"
        >
          <Text className="text-white font-semibold">Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
