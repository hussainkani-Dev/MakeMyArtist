import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {
  Ionicons,
  FontAwesome,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const galleryImages = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
];

const specialists = [
  { id: "1", name: "Ronald", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: "2", name: "Merry", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: "3", name: "Bella", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { id: "4", name: "Joseph", image: "https://randomuser.me/api/portraits/men/54.jpg" },
];

const reviews = [
  {
    id: "1",
    name: "Jennie Whang",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    time: "2 days ago",
    rating: 4,
    review: "The place was clean, great service, staff are friendly. I will certainly recommend to my friends and visit again! :)",
  },
  {
    id: "2",
    name: "Nathalie",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    time: "1 week ago",
    rating: 4,
    review: "Very nice service from the specialist. I always go here for my treatment.",
  },
  {
    id: "3",
    name: "Julia Martha",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    time: "2 weeks ago",
    rating: 4,
    review: "This is my favourite place to treat my hair :)",
  },
];

const services = [
  {
    id: "1",
    name: "Woman Medium Haircut",
    price: "$50",
    discount: "-20%",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400",
    description: "A blunt cut bob is a shorter hairstyle that's clean and modern.",
    added: false,
  },
  {
    id: "2",
    name: "Bob / Lob Cut",
    price: "$55",
    discount: "-20%",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400",
    description: "Lob haircut is a women's hairstyle that is cut somewhere between.",
    added: true,
  },
  {
    id: "3",
    name: "Medium Length Layer Cut",
    price: "$80",
    discount: "",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
    description: "Layered hair is a hairstyle that gives the illusion of volume.",
    added: true,
  },
  {
    id: "4",
    name: "V-Shaped Cut",
    price: "$90",
    discount: "-5%",
    image: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=400",
    description: "There are many variations between V-shaped hairstyles.",
    added: true,
  },
];

export default function ShopDetailsInfo() {
  return (
    <View style={{ flex: 1 }}>

      {/* ✅ ScrollView handles scrolling inside bottom sheet */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
      >
        {/* Title & Address */}
        <Text className="text-3xl font-bold mt-2">Plush Beauty Lounge</Text>
        <Text className="text-gray-500 mt-1">
          360 Stillwater Rd. Palm City, FL 34990
        </Text>

        {/* Info Icons */}
        <View className="flex-row flex-wrap mt-6">
          <View className="flex-row w-1/2 items-center mb-4">
            <Ionicons name="time-outline" size={18} color="#0F766E" />
            <Text className="ml-2">Open Today</Text>
          </View>

          <View className="flex-row items-center mb-4">
            <MaterialIcons name="local-offer" size={18} color="#CF2475" />
            <Text className="ml-2 text-primary-pink font-bold">-58%</Text>
          </View>

          <View className="flex-row items-center w-1/2">
            <FontAwesome name="star" size={18} color="#F59E0B" />
            <Text className="ml-2 font-bold">4.7</Text>
            <Text className="text-gray-500 ml-1">(2.7k)</Text>
          </View>

          <View className="flex-row items-center">
            <Feather name="eye" size={18} color="#999" />
            <Text className="ml-2">10k Views</Text>
          </View>
        </View>

        <View className="h-[1px] bg-gray-200 my-6" />

        {/* About */}
        <Text className="text-2xl font-bold">About</Text>
        <Text className="text-gray-500 leading-7 mt-5">
          Living up to our name Plush Beauty Lounge, the team is highly
          energetic and creative. We believe that if it matters to you, it
          matters to us.
        </Text>
        <Text className="text-gray-500 leading-7 mt-5">
          Keeping up to speed with the market's latest trends, Plush Beauty
          Lounge recognizes the need for constant improvement. Our team receives
          regular training from hairdressers all over the world.
        </Text>

         <Text className="text-gray-500 leading-7 mt-5">
          Keeping up to speed with the market's latest trends, Plush Beauty
          Lounge recognizes the need for constant improvement. Our team receives
          regular training from hairdressers all over the world.
        </Text>
        <TouchableOpacity>
          <Text className="text-primary-pink font-bold mt-3">Read More</Text>
        </TouchableOpacity>

        {/* Opening Hours */}
        <Text className="text-2xl font-bold mt-8">Opening Hours</Text>
        <View className="flex-row justify-between mt-6">
          <View>
            <Text className="text-gray-500">Monday - Friday</Text>
            <Text className="font-bold text-lg mt-2">08:00am - 03:00pm</Text>
          </View>
          <View>
            <Text className="text-gray-500">Saturday - Sunday</Text>
            <Text className="font-bold text-lg mt-2">09:00am - 02:00pm</Text>
          </View>
        </View>

        {/* Services */}
        <Text className="text-2xl font-bold mt-10 mb-5">Our Services</Text>

        {/* Categories */}
        <View className="flex-row mb-5">
          <TouchableOpacity className="bg-[#EAF8FC] border border-cyan-700 rounded-full px-5 py-3 mr-3 flex-row items-center">
            <FontAwesome5 name="cut" size={14} color="#0F6D8A" />
            <Text className="text-cyan-700 ml-2 font-medium">Haircut</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-300 rounded-full px-5 py-3 mr-3">
            <Text>Facial</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-300 rounded-full px-5 py-3">
            <Text>Nails</Text>
          </TouchableOpacity>
        </View>

        {/* Service Cards */}
        {services.map((item) => (
          <View
            key={item.id}
            className="bg-white rounded-2xl p-3 flex-row shadow-sm border border-gray-100 mb-4"
          >
            <Image
              source={{ uri: item.image }}
              className="w-24 h-24 rounded-xl"
            />
            <View className="flex-1 ml-4">
              <View className="flex-row justify-between">
                <View className="flex-1 pr-2">
                  <Text numberOfLines={1} className="font-bold text-[15px]">
                    {item.name}
                  </Text>
                  <Text className="text-cyan-700 font-bold mt-1">
                    {item.price}
                  </Text>
                </View>
                {item.discount !== "" && (
                  <View className="bg-orange-100 rounded-full px-2 py-1 h-6 justify-center">
                    <Text className="text-orange-500 text-[11px] font-bold">
                      {item.discount}
                    </Text>
                  </View>
                )}
              </View>
              <Text
                numberOfLines={2}
                className="text-gray-500 text-[12px] mt-2 leading-4"
              >
                {item.description}
              </Text>
              <View className="items-end mt-2">
                <TouchableOpacity
                  className={`w-9 h-9 rounded-full justify-center items-center ${
                    item.added ? "bg-[#0F6D8A]" : "bg-red-100"
                  }`}
                >
                  <MaterialIcons
                    name={item.added ? "add" : "remove"}
                    size={22}
                    color={item.added ? "white" : "#EF4444"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* View All */}
        <TouchableOpacity className="border border-cyan-700 rounded-full h-12 justify-center items-center mt-2 mb-6">
          <Text className="text-cyan-700 font-semibold">View All Services</Text>
        </TouchableOpacity>

        {/* Gallery */}
        <View className="flex-row justify-between items-center mt-4">
          <Text className="text-xl font-bold">Gallery</Text>
          <TouchableOpacity>
            <Text className="text-cyan-700 font-medium">View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-4"
        >
          {galleryImages.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img }}
              className="w-24 h-24 rounded-2xl mr-3"
            />
          ))}
        </ScrollView>

        {/* Specialists */}
        <View className="flex-row justify-between items-center mt-10">
          <Text className="text-xl font-bold">Our Specialist</Text>
          <TouchableOpacity>
            <Text className="text-cyan-700 font-medium">View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5"
        >
          {specialists.map((item) => (
            <View key={item.id} className="items-center mr-5">
              <Image
                source={{ uri: item.image }}
                className="w-16 h-16 rounded-full"
              />
              <Text className="mt-2 text-sm">{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Reviews */}
        <View className="flex-row justify-between items-center mt-10">
          <Text className="text-xl font-bold">Reviews</Text>
          <TouchableOpacity>
            <Text className="text-cyan-700 font-medium">View all</Text>
          </TouchableOpacity>
        </View>
        {reviews.map((item) => (
          <View key={item.id} className="mt-6">
            <View className="flex-row">
              <Image
                source={{ uri: item.image }}
                className="w-12 h-12 rounded-full"
              />
              <View className="flex-1 ml-3">
                <View className="flex-row justify-between">
                  <Text className="font-semibold">{item.name}</Text>
                  <Text className="text-xs text-gray-400">{item.time}</Text>
                </View>
                <View className="flex-row mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesome
                      key={star}
                      name="star"
                      size={12}
                      color={star <= item.rating ? "#F59E0B" : "#D1D5DB"}
                      style={{ marginRight: 2 }}
                    />
                  ))}
                </View>
                <Text className="text-gray-500 mt-2 leading-5">
                  {item.review}
                </Text>
              </View>
            </View>
            <View className="h-[1px] bg-gray-100 mt-5" />
          </View>
        ))}
      </ScrollView>

      {/* ✅ Book Now bar — fixed at bottom, outside scroll */}
      <View className="bg-white px-6 py-4 border-t border-gray-200 flex-row items-center justify-between">
        <View>
          <Text className="text-gray-500">Total (1 Service)</Text>
          <Text className="text-2xl font-bold">
            $40
            <Text className="text-gray-400 text-base line-through"> $10</Text>
          </Text>
        </View>

        <TouchableOpacity className="w-12 h-12 rounded-full border border-cyan-700 justify-center items-center">
          <Ionicons name="chatbubble-ellipses" size={22} color="#0F6D8A" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#0F6D8A] rounded-full px-10 h-12 justify-center">
          <Text className="text-white font-bold text-base">Book Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}