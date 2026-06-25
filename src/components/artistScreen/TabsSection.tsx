// components/TabsSection.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const tabs = [
  "Overview",
  "Services",
  "Gallery",
  "Review",
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("Services");

  return (
    <View className="flex-row mt-7 px-5">
      {tabs.map((tab) => {
        const active = activeTab === tab;

        return (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full mr-3 ${
              active ? "bg-orange-100" : "bg-gray-100"
            }`}
          >
            <Text
              className={`font-medium ${
                active ? "text-primary-pink" : "text-gray-500"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}