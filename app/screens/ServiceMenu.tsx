import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function ServiceMenuScreen() {
  const [selectedTab, setSelectedTab] = useState("Haircut");

  const [services, setServices] = useState([
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
      title: "Woman Blunt Cut",
      price: 50,
      oldPrice: 70,
      duration: "2 hour",
      discount: 20,
      description:
        "A blunt cut bob is a shorter hairstyle that's cut straight across.",
      qty: 1,
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600",
      title: "Bob / Lob Cut",
      price: 55,
      oldPrice: 70,
      duration: "1.5 hour",
      discount: 20,
      description:
        "Lob haircut is a women's hairstyle that is cut somewhere.",
      qty: 0,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
      title: "Medium Length Layer Cut",
      price: 80,
      oldPrice: 100,
      duration: "1 hour",
      discount: 0,
      description:
        "Layered hair is a hairstyle that gives the illusion of length.",
      qty: 0,
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600",
      title: "V-Shaped Cut",
      price: 90,
      oldPrice: 120,
      duration: "2.5 hour",
      discount: 5,
      description:
        "There are a lot of variations between V-shaped haircuts.",
      qty: 0,
    },
  ]);

  const handleAdd = (id) => {
    setServices((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setServices((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(0, item.qty - 1) }
          : item
      )
    );
  };

  const total = useMemo(() => {
    return services.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }, [services]);

  const totalServices = useMemo(() => {
    return services.reduce((sum, item) => sum + item.qty, 0);
  }, [services]);

  const renderItem = ({ item }) => (
    <View className="bg-white rounded-2xl p-2  mb-3 flex-row">
      <Image
        source={{ uri: item.image }}
        className="w-24 h-24 rounded-xl"
      />

      <View className="flex-1 ml-3 justify-between">
        <View>
          <View className="flex-row justify-between items-center">
            <Text
              numberOfLines={1}
              className="text-[13px] font-semibold text-gray-800 flex-1"
            >
              {item.title}
            </Text>

            {item.discount > 0 && (
              <Text className="text-orange-500 text-[11px] font-semibold">
                - {item.discount}%
              </Text>
            )}
          </View>

          <View className="flex-row items-center mt-1">
            <Text className="text-primary-pink font-bold text-[15px]">
              AED {item.price}
            </Text>

            <Text className="text-gray-400 text-[11px] ml-2">
              • {item.duration}
            </Text>
          </View>

          <Text
            numberOfLines={2}
            className="text-gray-400 text-[11px] mt-1 leading-4"
          >
            {item.description}
          </Text>
        </View>
      </View>

      <View className="justify-center items-center">
        {item.qty === 0 ? (
          <TouchableOpacity
            onPress={() => handleAdd(item.id)}
            className="w-8 h-8 rounded-full bg-primary-pink items-center justify-center"
          >
            <Ionicons name="add" size={18} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => handleRemove(item.id)}
            className="w-8 h-8 rounded-full border border-red-400 items-center justify-center"
          >
            <Ionicons name="remove" size={18} color="#ef4444" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 pt-14 bg-[#F5F7FA]">
      {/* Header */}
      <View className="px-5 pt-4">
        <View className="flex-row items-center justify-between">
         <TouchableOpacity onPress={() => router.back()}>
  <Ionicons
    name="chevron-back"
    size={22}
    color="#000"
  />
</TouchableOpacity>

          <Text className="font-semibold text-xl">
            Service Menu
          </Text>

          <View style={{ width: 22 }} />
        </View>

        {/* Tabs */}
        <View className="flex-row mt-5 mb-4">
          {["Haircut", "Facial", "Nails"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setSelectedTab(tab)}
              className={`mr-3 px-4 py-2 rounded-full flex-row items-center ${
                selectedTab === tab
                  ? "bg-[#f7e4f5] border border-primary-pink"
                  : "bg-[#f8eaf7]"
              }`}
            >
              <Ionicons
                name={
                  tab === "Haircut"
                    ? "cut"
                    : tab === "Facial"
                    ? "happy-outline"
                    : "hand-left-outline"
                }
                size={26}
                color="#CF2475"
              />
              <Text className="ml-2 text-primary-pink text-base">
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Services */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4 flex-row items-center justify-between border-t border-gray-100">
        <View>
          <Text className="text-gray-400 text-xs">
            Total | Service
          </Text>

          <View className="flex-row items-end">
            <Text className="text-primary-pink text-2xl font-bold">
              AED {total}
            </Text>

            <Text className="text-gray-400 text-xs ml-2 mb-1">
              {totalServices}
            </Text>
          </View>
        </View>

        <TouchableOpacity   onPress={() => router.push("/screens/book-service")} className="bg-secondary-purple px-10 py-4 rounded-full">
          <Text className="text-white font-semibold">
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}