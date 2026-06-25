import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import {
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CalendarPlus2,
} from "lucide-react-native";

const dates = [
  {
    day: "Sun",
    date: "11",
    active: true,
  },
  {
    day: "Mon",
    date: "12",
  },
  {
    day: "Tue",
    date: "13",
  },
  {
    day: "Wed",
    date: "14",
  },
];

const appointments = [
  {
    id: 1,
    name: "Oliver Thompson",
    service: "Hair & Beard Cut",
    time: "10:00 AM",
    status: "Success",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    success: true,
  },
  {
    id: 2,
    name: "Liam Walker",
    service: "Beard Trim & Style",
    time: "10:30 AM",
    status: "Pending",
    image:
      "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "William Wilson",
    service: "Hair & Beard Cut",
    time: "11:00 AM",
    status: "Pending",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 4,
    name: "Ethan James",
    service: "Trendy Hair Blonde",
    time: "12:00 PM",
    image:
      "https://randomuser.me/api/portraits/men/76.jpg",
    status: "Pending",
  },
  {
    id: 5,
    name: "James Taylor",
    service: "Hair Cut & Blonde",
    time: "12:30 PM",
    image:
      "https://randomuser.me/api/portraits/men/12.jpg",
    status: "Pending",
  },
  {
    id: 6,
    name: "Ethan Carter",
    service: "Facial Treatment",
    time: "01:00 PM",
    image:
      "https://randomuser.me/api/portraits/men/89.jpg",
    status: "Pending",
  },
];

export default function Booking() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-gray-50"
    >
      <View className="px-5 pt-16 pb-10">
        {/* Top Header */}
        <View className="flex-row items-center justify-between">
          {/* Date Picker */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center bg-white px-4 py-3 rounded-2xl"
          >
            <CalendarDays
              size={14}
              color="#1F2937"
            />

            <Text className="text-[#1F2937] font-semibold text-sm ml-3">
              Sun, 11 May 25
            </Text>

            <ChevronDown
              size={12}
              color="#6B7280"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>

          {/* Add Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-12 h-12 rounded-full bg-primary-pink items-center justify-center"
          >
            <CalendarPlus2
              size={18}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* Date Tabs */}
        <View className="flex-row items-center mt-8">
          {dates.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              className={`w-[68px] h-[92px] rounded-[24px] mr-4 items-center justify-center ${
                item.active
                  ? "bg-primary-pink"
                  : "bg-white"
              }`}
            >
              <Text
                className={`text-base font-bold ${
                  item.active
                    ? "text-white"
                    : "text-[#374151]"
                }`}
              >
                {item.day}
              </Text>

              <Text
                className={`text-base font-bold mt-1 ${
                  item.active
                    ? "text-white"
                    : "text-[#111827]"
                }`}
              >
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Arrow */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="w-[68px] h-[92px] rounded-[24px] bg-white items-center justify-center"
          >
            <ChevronRight
              size={26}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Appointment Title */}
        <Text className="text-lg font-bold text-[#111827] mt-10">
          Appointment{" "}
          <Text className="text-[#7C8BA0] font-semibold">
            (6)
          </Text>
        </Text>

        {/* Appointment List */}
        <View className="mt-4">
          {appointments.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              className="flex-row items-center bg-white p-4 rounded-md justify-between mb-3"
            >
              {/* Left */}
              <View className="flex-row items-center flex-1">
                <Image
                  source={{
                    uri: item.image,
                  }}
                  className="w-[58px] border-2 border-primary-pink h-[58px] rounded-full"
                />

                <View className="ml-4 flex-1">
                  <Text
                    numberOfLines={1}
                    className="text-base font-bold text-[#1F2937]"
                  >
                    {item.name}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className="text-base text-[#7C8BA0] mt-1"
                  >
                    {item.service}
                  </Text>
                </View>
              </View>

              {/* Right */}
              <View className="items-end">
                <View
                  className={`px-4 py-2 rounded-full ${
                    item.success
                      ? "bg-[#E6FFF2]"
                      : "bg-[#FFF6DB]"
                  }`}
                >
                  <Text
                    className={`text-xs font-bold ${
                      item.success
                        ? "text-[#22C55E]"
                        : "text-[#EAB308]"
                    }`}
                  >
                    {item.status}
                  </Text>
                </View>

                <Text className="text-sm mr-2 text-[#9CA3AF] font-semibold mt-2">
                  {item.time}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}