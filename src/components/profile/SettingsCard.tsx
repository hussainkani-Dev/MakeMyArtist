import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useAuthViewModel from "@/src/viewmodel/auth/useAuthViewModel";

type Props = {
  onPress: (title: string) => void;
};

const ACCOUNT_SETTINGS = [
  {
    id: "1",
    title: "Personal Information",
    icon: "person-outline",
  },
  {
    id: "2",
    title: "Password & Security",
    icon: "shield-checkmark-outline",
  },
  {
    id: "3",
    title: "Notification Preferences",
    icon: "notifications-outline",
  },
];

const COMMUNITY_SETTINGS = [
  {
    id: "4",
    title: "Friends & Social",
    icon: "people-outline",
  },
  {
    id: "5",
    title: "Privacy Policy",
    icon: "document-text-outline",
  },
  {
    id: "6",
    title: "Terms & Conditions",
    icon: "document-outline",
  },
  {
    id: "7",
    title: "Help & Support",
    icon: "help-circle-outline",
  },
];

export default function SettingsCard({
  onPress,
}: Props) {
  const { logout } = useAuthViewModel();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(item.title)}
      className="flex-row items-center justify-between py-5"
    >
      <View className="flex-row items-center">

        <View className="w-12 h-12 rounded-full bg-[#F7F7F7] items-center justify-center">
          <Ionicons
            name={item.icon}
            size={22}
            color="#CF2475"
          />
        </View>

        <Text className="ml-4 text-[16px] font-semibold text-gray-700">
          {item.title}
        </Text>

      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#999"
      />
    </TouchableOpacity>
  );

  return (
    <View className="px-5">

      {/* Account */}

      <Text className="text-xl font-bold text-gray-800 mb-4">
        Account Settings
      </Text>

      <View className="bg-white rounded-3xl px-4 mb-8">

        <FlatList
          scrollEnabled={false}
          data={ACCOUNT_SETTINGS}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View className="h-[1px] bg-gray-100" />
          )}
          renderItem={renderItem}
        />

      </View>

      {/* Community */}

      <Text className="text-xl font-bold text-gray-800 mb-4">
        Community
      </Text>

      <View className="bg-white rounded-3xl px-4">

        <FlatList
          scrollEnabled={false}
          data={COMMUNITY_SETTINGS}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View className="h-[1px] bg-gray-100" />
          )}
          renderItem={renderItem}
        />

      </View>

      {/* Logout */}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={logout}
        className="bg-secondary-purple rounded-2xl h-16 mt-8 items-center justify-center"
      >
        <View className="flex-row items-center">

          <Ionicons
            name="log-out-outline"
            size={22}
            color="white"
          />

          <Text className="text-white font-bold text-lg ml-2">
            Logout
          </Text>

        </View>
      </TouchableOpacity>

    </View>
  );
}