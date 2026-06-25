import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("screen");

type Item = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
};

const DATA: Item[] = [
  {
    id: "1",
    title: "Best Stylist For You",
    subtitle: "Styling your appearance according to your lifestyle",
    image: require("../../assets/finalImage/onboard_1.png"),
  },
  {
    id: "2",
    title: "Meet Our Specialists",
    subtitle: "There are many best stylists from all the best salons ever",
    image: require("../../assets/finalImage/onboard_2.png"),
  },
  {
    id: "3",
    title: "Find The Best Service",
    subtitle: "There are various services from the best salons",
    image: require("../../assets/finalImage/onboard_3.png"),
  },
  {
    id: "4",
    title: "Let's Join with Us",
    subtitle: "Find and book Beauty, Salon, Barber and Spa services",
    image: require("../../assets/finalImage/onboard_4.png"),
  },
];

export default function Onboarding() {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < DATA.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const isLast = index === DATA.length - 1;

    return (
      <View style={{ width, flex: 1 }}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          className="flex-1 "
        >
          {/* Overlay */}
          <View className="flex-1 justify-end p-6">
            {/* Text */}
            <Text className="text-white pb-5 text-4xl font-extrabold text-center">
              {item.title}
            </Text>
            <Text className="text-white text-3xl pb-10 font-bold text-center mt-2">
              {item.subtitle}
            </Text>

            {/* Pagination */}
            <View className="flex-row justify-center mt-4">
              {DATA.map((_, i) => (
                <View
                  key={i}
                  className={`h-2 rounded-full mx-1 ${
                    i === currentIndex ? "w-6 bg-primary-pink" : "w-2 bg-gray-400"
                  }`}
                />
              ))}
            </View>

            {/* Buttons */}
            <View className="mt-6">
              {!isLast ? (
                <TouchableOpacity
                  onPress={handleNext}
                  className="bg-white py-4 rounded-full items-center"
                >
                  <Text className="text-secondary-purple font-semibold">Next</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity className="bg-white py-4 rounded-full items-center mb-3">
                    <Text className="text-black font-semibold">
                      Join with Google
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    className="bg-orange-pr py-4 rounded-full items-center"
                    onPress={() => router.push("/screens/SignUp")}
                  >
                    <Text className="text-white font-semibold">
                      Join with Email
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>

            {/* Sign in */}
            <Text className="text-center text-gray-300 mb-20 mt-4">
              Already have an account?{" "}
              <Text
                className="text-white font-semibold"
                onPress={() => router.push("/screens/login")}
              >
                Sign in
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={flatListRef}
        data={DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
    </View>
  );
}
