// components/ServicesSection.tsx

import React from "react";
import { View } from "react-native";
import ServiceCard from "./ServiceCard";

const DATA = [
  {
    title: "Spa",
    types: "48 Types",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
  },
  {
    title: "Haircuts",
    types: "38 Types",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
  },
  {
    title: "Facial",
    types: "22 Types",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  },
  {
    title: "Massage",
    types: "15 Types",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
  },
];

export default function ServicesSection() {
  return (
    <View className="px-5 mt-6 flex-row flex-wrap justify-between">
      {DATA.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          types={item.types}
          image={item.image}
        />
      ))}
    </View>
  );
}