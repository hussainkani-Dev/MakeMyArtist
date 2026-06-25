import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import {
  ArrowLeft,
  Search,
  ChevronRight,
} from "lucide-react-native";

const specialistData = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=400",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=400",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=400",
  },
];

const servicesData = [
  {
    id: "1",
    title: "Hair cutting",
    salon: "Barbershop (2518)",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=400",
    active: false,
  },
  {
    id: "2",
    title: "Treatment",
    salon: "Barbershop (2518)",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400",
    active: false,
  },
  {
    id: "3",
    title: "Shaving",
    salon: "Barbershop (2518)",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400",
    active: true,
  },
  {
    id: "4",
    title: "Kids hair cut",
    salon: "Barbershop (2518)",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
    active: false,
  },
];

export default function ServicesScreen() {
  return (
    <SafeAreaView className="flex-1 my-10 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        {/* HEADER */}
        <View className="flex-row items-center justify-between px-5 pt-5">
          <TouchableOpacity className="w-11 h-11 rounded-full bg-white items-center justify-center">
            <ArrowLeft size={20} color="#222" />
          </TouchableOpacity>

          <Text className="text-xl font-bold text-[#222]">
            Services
          </Text>

          <TouchableOpacity className="w-11 h-11 rounded-full bg-white items-center justify-center">
            <Search size={20} color="#222" />
          </TouchableOpacity>
        </View>

        {/* CHOOSE SPECIALIST */}
        <View className="mt-8 px-5">
          <Text className="text-xl font-bold text-[#222] mb-5">
            Choose Specialist
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {specialistData.map((item) => (
              <Image
                key={item.id}
                source={{ uri: item.image }}
                className="w-[115px] h-[115px] border border-l-4 border-b-4 border-primary-pink rounded-3xl mr-4"
              />
            ))}
          </ScrollView>
        </View>

        {/* CHOICE SALONE */}
        <View className="mt-8 px-5">
          <Text className="text-xl font-bold text-[#222] mb-5">
            Choice Salone
          </Text>

          {servicesData.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="bg-white border-r-2 border-primary-pink rounded-[26px] p-2 mb-4 flex-row items-center"
              activeOpacity={0.8}
            >
              {/* IMAGE */}
              <Image
                source={{ uri: item.image }}
                className="w-[82px] h-[82px] rounded-[22px]"
              />

              {/* CONTENT */}
              <View className="flex-1 ml-4">
                <Text className="text-lg font-bold text-prborder-primary-pink">
                  {item.title}
                </Text>

                <Text className="text-base text-gray-400 mt-1 font-medium">
                  {item.salon}
                </Text>
              </View>

              {/* BUTTON */}
              <View
                className={`w-10 h-10 rounded-full items-center justify-center ${
                  item.active
                    ? "bg-prborder-primary-pink"
                    : "bg-transparent"
                }`}
              >
                <ChevronRight
                  size={22}
                  color={item.active ? "#fff" : "#999"}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}