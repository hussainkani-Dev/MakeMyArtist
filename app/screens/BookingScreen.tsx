import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

function Tab1() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Upcoming</Text>
    </View>
  );
}

function Tab2() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Completed</Text>
    </View>
  );
}

function Tab3() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Canceled</Text>
    </View>
  );
}

export default function BookingScreen() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const tabs = ["Upcoming", "Completed", "Canceled"];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="mt-12 flex-row items-center justify-between px-5 py-4">
        {/* Back */}
        {/* <TouchableOpacity
          onPress={() => router.back()}
          className="h-10 w-10 items-center justify-center rounded-full bg-gray-100"
        >
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity> */}

        {/* Title */}
        <View className="flex-row items-center">
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#e41d89"
          />
          <Text className="ml-2 text-[18px] font-extrabold text-black">
            My Bookings
          </Text>
        </View>

        {/* Home */}
        <TouchableOpacity
          onPress={() => router.push("/(tabs)")}
          className="h-10 w-10 items-center justify-center rounded-full bg-gray-100"
        >
          <Ionicons name="home-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Tabs Card */}
      <View className="bg-white px-5">
        <View className="flex-row rounded-xl bg-[#F2F2F2] p-1">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 items-center rounded-[10px] py-2 ${
                activeTab === tab ? "bg-white" : ""
              }`}
            >
              <Text
                className={`text-[14px] ${
                  activeTab === tab
                    ? "font-semibold text-black"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Content */}
      <View className="flex-1">
        {activeTab === "Upcoming" && <Tab1 />}
        {activeTab === "Completed" && <Tab2 />}
        {activeTab === "Canceled" && <Tab3 />}
      </View>
    </View>
  );
}