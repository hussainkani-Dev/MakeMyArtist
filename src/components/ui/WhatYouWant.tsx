import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import {
  Brush,
  Scissors,
  Sparkles,
  Hand,
  HeartPulse,
  Flower2,
  Palette,
  Plus,
} from "lucide-react-native";
const services = [
  {
    title: "MAKEUP",
    icon: Brush,
  },
  {
    title: "HAIR STYLING",
    icon: Scissors,
  },
  {
    title: "HAIR SPA",
    icon: Sparkles,
  },
  {
    title: "MEHENDI",
    icon: Hand,
  },
  {
    title: "SKIN CARE",
    icon: HeartPulse,
  },
  {
    title: "NAIL ART",
    icon: Palette,
  },
  {
    title: "BRIDAL",
    icon: Flower2,
  },
  {
    title: "& MORE",
    icon: Plus,
  },
];

const WhatYouWant = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Skeleton UI
  if (loading) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white px-5 pt-10"
      >
        {/* Title Skeleton */}
        <View className="w-52 h-7 bg-gray-200 rounded-lg mb-8" />

        {/* Services Skeleton */}
        <View className="flex-row flex-wrap justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <View
              key={index}
              className="w-1/4 items-center mb-8"
            >
              {/* Circle Skeleton */}
              <View className="w-16 h-16 rounded-full bg-gray-200 border border-gray-100" />

              {/* Text Skeleton */}
              <View className="w-14 h-3 bg-gray-200 rounded-full mt-3" />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white px-5 pt-10"
    >
      {/* Title */}
      <Text className="text-lg font-bold text-black mb-8">
        What do you want to do?
      </Text>

      {/* Services */}
      <View className="flex-row flex-wrap justify-between">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              className="w-1/4 items-center mb-8"
                onPress={() => router.push("/screens/ServiceMenu")}
            >
              {/* Icon Circle */}
              <View className="w-16 h-16 border border-primary-pink rounded-full items-center justify-center bg-white shadow-sm">
                <Icon
                  size={22}
                  color="#CF2475"
                  strokeWidth={1.8}
                />
              </View>

              {/* Title */}
              <Text className="mt-2 text-sm text-primary-pink font-medium">
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WhatYouWant;