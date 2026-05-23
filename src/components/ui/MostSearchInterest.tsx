import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  Scissors,
  Sparkles,
  Hand,
  Brush,
  Waves,
} from "lucide-react-native";

const categories = [
  {
    title: "Haircut",
    icon: Scissors,
  },
  {
    title: "Facial",
    icon: Sparkles,
  },
  {
    title: "Nails",
    icon: Hand,
  },
  {
    title: "Makeup",
    icon: Brush,
  },
  {
    title: "Spa",
    icon: Waves,
  },
];

const MostSearchInterest = () => {
  return (
    <View className="mt-0">
      {/* Heading */}
     

      {/* Horizontal Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        {categories.map((item, index) => {
          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              className="bg-orange-50 rounded-full  border-l-2 border-b-2  border-orange-600 px-7 py-4 mr-4 flex-row items-center "
            >
              {/* Icon */}
              <View className="mr-4">
                <Icon
                  size={20}
                  color="#EA580C"
                  strokeWidth={1.7}
                />
              </View>

              {/* Title */}
              <Text className="text-black text-base font-medium">
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MostSearchInterest;