import useAuthViewModel from "@/src/viewmodel/auth/useAuthViewModel";

import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

const DATA = [
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
];

export default function Profile() {
  const { logout } = useAuthViewModel();

  return (
    <ScrollView
      className="flex-1 bg-[#F4F4F4]"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <LinearGradient
        colors={["#F4F4F4", "#F4F4F4"]}
        className="pt-16 px-5"
      >
        {/* Top Bar */}
        <View className="flex-row items-center justify-center relative">
          <Text className="text-lg font-bold text-[#1A1A1A]">
            Profile
          </Text>

          {/* Edit Button */}
          <TouchableOpacity className="absolute right-0 w-11 h-11 rounded-2xl bg-white items-center justify-center shadow-sm">
            <Ionicons
              name="create-outline"
              size={20}
              color="#555"
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View className="items-center mt-8">
          <Image
            source={require("../../assets/images/onboard_bg_1_1_11zon.jpg")}
            className="w-24 h-24 rounded-full"
          />

          <Text className="text-xl font-bold text-[#1F2937] mt-5">
            User
          </Text>

          <Text className="text-[15px] text-[#7C7C7C] mt-1">
            sample@example.com
          </Text>

          {/* Edit Profile Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-prborder-primary-pink px-6 py-3 rounded-full mt-5"
          >
            <Text className="text-white font-bold text-[15px]">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Content */}
      <View className="px-5 mt-8">
        {/* Account Setting */}
        <Text className="text-xl font-bold text-[#1F2937] mb-5">
          Account Setting
        </Text>

        <View className="bg-white rounded-[26px] px-4 py-2">
          <FlatList
            data={DATA.slice(0, 3)}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-[#F1F1F1]" />
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex-row items-center justify-between py-5"
              >
                <View className="flex-row items-center">
                  <View className="w-11 h-11 rounded-full bg-[#F8F8F8] items-center justify-center">
                    <Ionicons
                      name={item.icon as any}
                      size={22}
                      color="#8B8B8B"
                    />
                  </View>

                  <Text className="text-lg text-[#4B5563] ml-4 font-medium">
                    {item.title}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#A1A1AA"
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Community Setting */}
        <Text className="text-xl font-bold text-[#1F2937] mt-8 mb-5">
          Community Settings
        </Text>

        <View className="bg-white rounded-[26px] px-4 py-2">
          <FlatList
            data={DATA.slice(3)}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-[#F1F1F1]" />
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex-row items-center justify-between py-5"
              >
                <View className="flex-row items-center">
                  <View className="w-11 h-11 rounded-full bg-[#F8F8F8] items-center justify-center">
                    <Ionicons
                      name={item.icon as any}
                      size={22}
                      color="#8B8B8B"
                    />
                  </View>

                  <Text className="text-lg text-[#4B5563] ml-4 font-medium">
                    {item.title}
                  </Text>
                </View>

                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color="#A1A1AA"
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => logout()}
          className="bg-white  h-[62px] rounded-2xl items-center justify-center mt-5 mb-20"
        >
          <View className="flex-row items-center">
            <Ionicons
              name="log-out-outline"
              size={22}
              color="#000"
            />

            <Text className="text-primary-purple text-lg font-bold ml-2">
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}