import AutoBannerList from "@/src/components/ui/autoBannerList";
import ExclsveDealsCardItem from "@/src/components/ui/exclsveDealsCardItem";
import FeatrdSalonCardItem from "@/src/components/ui/featrdSalonCardItem";
import ListTitleCardItem from "@/src/components/ui/listTitleCardItem";
import NrBySalonCardItem from "@/src/components/ui/nrBySalonCardItem";
import TopServiceCardItem from "@/src/components/ui/topServiceCardItem";
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
  { id: "1", image: require("../../assets/images/c_1.png") },
  { id: "2", image: require("../../assets/images/c_2.png") },
  { id: "3", image: require("../../assets/images/c_3.png") },
];

export default function Home() {
  const handleLocRedirect = () => {
    console.log("pressedLoc");
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
                  <TouchableOpacity>
                    <View className="w-10 h-10 rounded-full bg-orange-500  items-center justify-center">
                      <Ionicons name="person" size={18} color="#fff" />
                    </View>
                  </TouchableOpacity>
                  <Text className="text-xl font-semibold text-black">
                    Hi User!
                  </Text>

                  {/* Location */}
                
                </View>

                {/* Right Profile */}

                <TouchableOpacity
                  onPress={handleLocRedirect}
                  className="flex-row items-center "
                >
                  <Ionicons name="location-sharp" size={25} className="text-orange-500" />
                  <Text className="text-lg text-gray-500 ml-1">
                    Dubai, UAE
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Search Bar */}
              <View className="mt-4 mx-5 flex-row items-center border border-orange-500 shadow-black bg-white rounded-xl px-3  h-[50px]">
                {/* Search Icon */}
                <Ionicons name="search" size={18} color="#7c7c7c" />

                {/* Placeholder */}
                <Text className="ml-2 flex-1 text-gray-500 text-[13px]">
                  Find your best artist
                </Text>

                {/* Filter Icon */}
                <View className="bg-orange-500 p-2 rounded-lg">
                  <Ionicons name="options-outline" size={16} color="#fff" />
                </View>
              </View>
            </View>
            <View className="bg-white">
              <AutoBannerList bannerList={banners} />
            </View>
            <View className="bg-white">
              <ListTitleCardItem
                item={{ title: "Exclusive Deals" }}
                onPress={(item) => console.log("Pressed:")}
              />
              <FlatList
                data={dataTopSveList}
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
              />

              <FlatList
                data={dataTopSveList}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TopServiceCardItem />}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View className="bg-white">
              <ListTitleCardItem
                item={{ title: "Featured Salons" }}
                onPress={(item) => console.log("Pressed:")}
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
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View className="bg-white">
              <ListTitleCardItem
                item={{ title: "Nearby Salons" }}
                onPress={(item) => console.log("Pressed:")}
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
