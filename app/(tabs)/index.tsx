import AutoBannerList from "@/src/components/ui/autoBannerList";
import ExclsveDealsCardItem from "@/src/components/ui/exclsveDealsCardItem";
import FeatrdSalonCardItem from "@/src/components/ui/featrdSalonCardItem";
import ListTitleCardItem from "@/src/components/ui/listTitleCardItem";
import NrBySalonCardItem from "@/src/components/ui/nrBySalonCardItem";
import TopServiceCardItem from "@/src/components/ui/topServiceCardItem";
import WhatYouWant from "@/src/components/ui/WhatYouWant";
import UpcomingAppointmentCard from "@/src/components/ui/UpcomingAppointmentCard";
import MostSearchInterest from "@/src/components/ui/MostSearchInterest";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const dataTopSveList = [
  {
    id: "1",
    title: "My Reviews",
  },
  {
    id: "2",
    title: "Wallet",
  },
  {
    id: "3",
    title: "Wallet",
  },
];
const banners = [
  { id: "1", image: require("../../assets/images/coup_1.png") },
  { id: "2", image: require("../../assets/images/coup_2.png") },
  { id: "3", image: require("../../assets/images/coup_3.png") },
];

const salons = [
  {
    id: 1,
    title: "Euphoria Spa & Beauty Lounge",
    image: require("../../assets/images/images.jpg"),
  },
  {
    id: 2,
    title: "Lumina Beauty Sanctuary",
    image: require("../../assets/images/onboard_bg_1_1_11zon.jpg"),
  },
  {
    id: 3,
    title: "Royal Beauty Center",
    image: require("../../assets/images/onboard_bg_2_2_11zon.jpg"),
  },
  {
    id: 4,
    title: "Glow Spa Lounge",
    image: require("../../assets/images/onboard_bg_3_3_11zon.jpg"),
  },
];

export default function Home() {
  const handleProfileRedirect = () => {
    router.push("/(tabs)/profile");
  };

  const handleLocRedirect = () => {
    router.push("/screens/locationSearchView");
  };
  return (
    <SafeAreaView className="flex-1 bg-white justify-center" edges={["top"]}>
      <FlatList
        data={[{ id: "main" }]} // dummy single item
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={() => (
          <>
            {/* HEADER */}
            <View className="bg-white shadow-black rounded-b-3xl pb-5">
              {/* Top Row */}
              <View className="flex-row justify-between items-center px-5 pt-5">
                {/* Left Side */}
                <View className="flex-row gap-2 items-center">
                  <TouchableOpacity onPress={handleProfileRedirect}>
                    <View className="w-10 h-10 rounded-full bg-primary-pink items-center justify-center">
                      <Ionicons name="person" size={18} color="#fff" />
                    </View>
                  </TouchableOpacity>
                  <Text className="text-xl font-semibold text-black">
                    Hi User!
                  </Text>

                  {/* Location */}
                </View>

                {/* Right Profile */}

                <TouchableOpacity className="flex-row items-center ">
                  <Ionicons name="location-sharp" size={25} color="#CF2475" />
                  <Text className="text-lg text-gray-500 ml-1">Dubai, UAE</Text>
                </TouchableOpacity>
              </View>

              {/* Search Bar */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleLocRedirect}
                className="mt-4 mx-5 flex-row items-center border border-primary-pink bg-white rounded-xl px-3 h-[50px]"
              >
                {/* Search Icon */}
                <Ionicons name="search" size={18} color="#7c7c7c" />

                {/* Placeholder */}
                <Text className="ml-2 flex-1 text-[13px] text-gray-500">
                  Find your best artist
                </Text>
              </TouchableOpacity>
            </View>
            <View className="bg-white">
              <AutoBannerList bannerList={banners} />
            </View>

            <View className="bg-white">
              <WhatYouWant />
            </View>
            <View className="bg-white">
              <ListTitleCardItem
                item={{ title: "Upcoming Appointment Card" }}
                onPress={(item) => console.log("Pressed:")}
                  route="screens/BookingScreen"
              />
              <UpcomingAppointmentCard />
            </View>
            <View className="bg-white">
              <ListTitleCardItem
                item={{ title: "Exclusive Deals" }}
                onPress={(item) => console.log("Pressed:")}
                  route="screens/SuggestedServicesScreen"
              />
              <FlatList
                data={dataTopSveList}
                className="mx-3"
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ExclsveDealsCardItem
                    item={item}
                    onPress={(item) => console.log("Pressed:", item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View className="bg-white">
              <ListTitleCardItem
                item={{ title: "Top Services" }}
                onPress={(item) => console.log("Pressed:")}
                  route="/screens/SuggestedServicesScreen"
              />

              <FlatList
                data={salons}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TopServiceCardItem item={item} />}
                columnWrapperStyle={{
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                }}
                contentContainerStyle={{
                  paddingBottom: 20,
                  paddingTop: 10,
                }}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View className="bg-white mx-3">
              <ListTitleCardItem
                item={{ title: "Featured Salons" }}
                onPress={(item) => console.log("Pressed:")}
                                  route="screens/SuggestedServicesScreen"

              />
              <FlatList
                data={dataTopSveList}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <FeatrdSalonCardItem
                    item={item}
                    onPress={(item) => console.log("Pressed:", item)}
                  />
                )}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View className="bg-white">
              <ListTitleCardItem
                item={{ title: "Most Search Interest" }}
                onPress={(item) => console.log("Pressed:")}
                                  route="/screens/ServiceMenu"

              />
              <MostSearchInterest />
            </View>
            <View className="bg-white mb-14">
              <ListTitleCardItem
                item={{ title: "Nearby Salons" }}
                onPress={(item) => console.log("Pressed:")}
                                  route="screens/SuggestedServicesScreen"

              />
              <FlatList
                data={dataTopSveList.slice(0, 5)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <NrBySalonCardItem
                    item={item}
                    onPress={(item) => console.log("Pressed:", item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}
