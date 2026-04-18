import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const salon_list = [
  { id: "1", name: "Beauty Face Ladies salon" },
  { id: "2", name: "Ladies Beauty salon" },
  { id: "3", name: "Anchor Beauty salon" },
  { id: "4", name: "J & Y Ladies Beauty salon" },
  { id: "5", name: "Fubari Beauty SAlon" },
];

const area_list = [
  { id: "1", name: "Acacia Avenues" },
  { id: "2", name: "Al Badaa" },
  { id: "3", name: "Al Barari (Majan)" },
  { id: "4", name: "Al Barsha" },
  { id: "5", name: "Al Barsha South" },
];

export default function LocationSearchView() {
  const [areaVal, setAreaVal] = useState("");
  const [salonVal, setSalonVal] = useState("");

  const [showSalonList, setShowSalonList] = useState(false);
  const [showAreaList, setShowAreaList] = useState(false);

  const autoTextInputView = (
    list: Item[],
    value: string,
    setValue: (val: string) => void,
    setShowList: (val: boolean) => void,
  ) => {
    const filteredList =
      value.length === 0
        ? list
        : list.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()),
          );

    return (
      <View className="border border-gray-200 rounded-xl mt-1 max-h-52 w-[75%] ml-[18%] bg-white">
        <FlatList
          data={filteredList}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setValue(item.name);
                setShowList(false);
              }}
              className="p-3 border-b border-gray-100"
            >
              <Text className="text-black">{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 mt-2 bg-white">
      {/* Back Button */}
      <TouchableOpacity className="p-4">
        <Ionicons
          name="chevron-back-sharp"
          size={30}
          color="#f97316" // orange-500
          onPress={() => router.back()}
        />
      </TouchableOpacity>

      {/* Body */}
      <View className="flex-row p-2">
        {/* Icons */}
        <View className="w-[15%] justify-center items-center">
          <Ionicons name="search-circle" size={35} color="#f97316" />

          <View className="items-center w-1/2">
            <View className="w-[1px] h-[30px] border-dotted border-2 border-orange-500" />
          </View>

          <Ionicons name="location-sharp" size={35} color="#f97316" />
        </View>

        {/* Inputs */}
        <View className="w-[80%] justify-center items-center">
          <TextInput
            placeholder="Search for beauty salon, service..."
            placeholderTextColor="#cbcbcb"
            value={salonVal}
            onChangeText={(val) => {
              setSalonVal(val);
              setShowSalonList(true);
              setShowAreaList(false);
            }}
            onFocus={() => {
              setShowSalonList(true);
              setShowAreaList(false);
            }}
            className="w-full rounded-xl border-2 border-gray-100 m-1 p-3 text-black"
          />

          <TextInput
            placeholder="Select Area"
            placeholderTextColor="#cbcbcb"
            value={areaVal}
            onChangeText={(val) => {
              setAreaVal(val);
              setShowSalonList(false);
              setShowAreaList(true);
            }}
            onFocus={() => {
              setShowAreaList(true);
              setShowSalonList(false);
            }}
            className="w-full rounded-xl border-2 border-gray-100 m-1 p-3 text-black"
          />
        </View>
      </View>

      {/* Dropdowns */}
      {showSalonList &&
        autoTextInputView(salon_list, salonVal, setSalonVal, setShowSalonList)}

      {showAreaList &&
        autoTextInputView(area_list, areaVal, setAreaVal, setShowAreaList)}
    </SafeAreaView>
  );
}
