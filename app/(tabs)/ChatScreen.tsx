import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

import {
  Search,
  CalendarDays,
  Tag,
  DollarSign,
} from "lucide-react-native";

const tabs = ["Message", "Notification"];

const messagesData = [
  {
    id: "1",
    name: "Plush Beauty Lounge",
    message: "Good morning, anything we ca...",
    time: "11.32 PM",
    unread: 2,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=400",
  },
  {
    id: "2",
    name: "Lovely Lather",
    message: "Good morning, anything we ca...",
    time: "11.32 PM",
    unread: 2,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400",
  },
  {
    id: "3",
    name: "Cute Stuff Salon",
    message: "I would like to book an appoin...",
    time: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400",
  },
  {
    id: "4",
    name: "Love Live Salon",
    message: "I would like to book an appoin...",
    time: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
  },
  {
    id: "5",
    name: "Glitter Pop Salon",
    message: "I would like to book an appoin...",
    time: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
];

const notificationData = [
  {
    id: "1",
    title: "Reminder! .",
    message: "Get ready for your appointment at 9am",
    time: "Just now",
    type: "calendar",
    unread: true,
  },
  {
    id: "2",
    title: "Payment at Lovely Lather",
    message: "was success!",
    time: "11.32 PM",
    type: "payment",
    unread: true,
  },
  {
    id: "3",
    title: "You make an appointment",
    message: "with Lovely Lather",
    time: "Yesterday",
    type: "calendar",
  },
  {
    id: "4",
    title: "Get 20% offers for hair",
    message: "service at Lovely Lather",
    time: "2 days ago",
    type: "offer",
  },
  {
    id: "5",
    title: "Get 10% offers for hair",
    message: "service at Love Live Salon",
    time: "2 days ago",
    type: "offer",
  },
  {
    id: "6",
    title: "Reminder! .",
    message: "Get ready for your appointment at 9am",
    time: "3 Mar",
    type: "calendar",
  },
];

export default function ChatScreen() {
  const [activeTab, setActiveTab] = useState("Message");

  const renderMessageItem = ({ item }: any) => (
    <TouchableOpacity className="flex-row  items-center py-4 border-b border-gray-100">
      <Image
        source={{ uri: item.image }}
        className="w-[58px] h-[58px] rounded-full"
      />

      <View className="flex-1 ml-4">
        <Text className="text-base font-bold text-[#222]">
          {item.name}
        </Text>

        <Text
          numberOfLines={1}
          className="text-sm text-gray-500 mt-1"
        >
          {item.message}
        </Text>
      </View>

      <View className="items-end justify-between h-[50px]">
        <Text className="text-[12px] text-gray-400">
          {item.time}
        </Text>

        {item.unread && (
          <View className="w-5 h-5 rounded-full bg-primary-pink items-center justify-center">
            <Text className="text-white text-[11px] font-bold">
              {item.unread}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderNotificationItem = ({ item }: any) => {
    const renderIcon = () => {
      switch (item.type) {
        case "calendar":
          return (
            <CalendarDays size={18} color="#000" strokeWidth={2} />
          );

        case "payment":
          return (
            <DollarSign size={18} color="#000" strokeWidth={2} />
          );

        case "offer":
          return <Tag size={18} color="#000" strokeWidth={2} />;

        default:
          return null;
      }
    };

    return (
      <TouchableOpacity className="flex-row py-4  border-b border-gray-100">
        <View className="w-[52px] h-[52px] rounded-full bg-orange-300 items-center justify-center">
          {renderIcon()}
        </View>

        <View className="flex-1 ml-4">
          <Text className="text-base text-[#222] font-semibold">
            {item.title}
          </Text>

          <Text className="text-[14px] text-gray-500 leading-5 mt-1">
            {item.message}
          </Text>
        </View>

        <View className="items-end">
          <Text className="text-[12px] text-gray-400">
            {item.time}
          </Text>

          {item.unread && (
            <View className="w-[7px] h-[7px] rounded-full bg-orange-500 mt-4" />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-5 pt-14">
      {/* Tabs */}
      <View className="flex-row justify-center items-center border-b border-gray-100 pb-4">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className="mx-10 items-center"
          >
            <Text
              className={`text-[16px] font-semibold ${
                activeTab === tab
                  ? "text-primary-pink"
                  : "text-gray-300"
              }`}
            >
              {tab}
            </Text>

            {/* {activeTab === tab && (
              <View className="w-[5px] h-[5px] rounded-full bg-orange-500 mt-2" />
            )} */}
          </TouchableOpacity>
        ))}
      </View>

      {/* MESSAGE SCREEN */}
      {activeTab === "Message" ? (
        <View className="flex-1">
          {/* Search */}
          <View className="flex-row items-center bg-[#F3F6F8] rounded-full px-5 h-[54px] mt-5">
            <Search size={20} color="#000" />

            <TextInput
              placeholder="Search messages or salon"
              placeholderTextColor="#B7BDC7"
              className="flex-1 ml-3 text-[14px] text-black"
            />
          </View>

          <FlatList
            data={messagesData}
            keyExtractor={(item) => item.id}
            renderItem={renderMessageItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 30,
              paddingTop: 10,
            }}
          />
        </View>
      ) : (
        /* NOTIFICATION SCREEN */
        <FlatList
          data={notificationData}
          keyExtractor={(item) => item.id}
          renderItem={renderNotificationItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 30,
            paddingTop: 20,
          }}
          ListHeaderComponent={
            <View>
              <Text className="text-lg font-bold text-[#222] mb-5">
                New
              </Text>

              <View className="border-b border-gray-100" />

              <Text className="text-lg font-bold text-[#222] mt-8 mb-3">
                Earlier
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}