import React, { useEffect, useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

type BannerItem = {
  id: string;
  image: any;
};

type Props = {
  bannerList: BannerItem[];
};

export default function AutoBannerList({ bannerList }: Props) {
  const flatListRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // ⏳ Skeleton loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // 🔁 Auto scroll (stable)
  useEffect(() => {
    if (!bannerList?.length) return;

    const interval = setInterval(() => {
      let nextIndex = currentIndexRef.current + 1;

      if (nextIndex >= bannerList.length) {
        nextIndex = 0;
      }

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex); // only for dots
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ⏳ Skeleton UI
  if (loading) {
    return (
      <View className="flex-row px-4 mt-4 gap-3">
        {[1, 2, 3].map((_, i) => (
          <View
            key={i}
            className="bg-gray-200 rounded-2xl"
            style={{ width: width * 0.7, height: 140 }}
          />
        ))}
      </View>
    );
  }

  return (
    <View className="mt-4">
      <FlatList
        ref={flatListRef}
        data={bannerList}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}

        // 🔥 IMPORTANT (fix scroll glitch)
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}

        // 🔁 Sync manual swipe
        onMomentumScrollEnd={(ev) => {
          const index = Math.round(
            ev.nativeEvent.contentOffset.x / width
          );

          currentIndexRef.current = index;
          setCurrentIndex(index);
        }}

        renderItem={({ item }) => (
          <View style={{ width }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                width: width - 32,
                height: 150,
                borderRadius: 16,
                alignSelf: "center",
              }}
            />
          </View>
        )}
      />

      {/* 🔵 Dots */}
      <View className="flex-row justify-center mt-2">
        {bannerList.map((_, index) => (
          <View
            key={index}
            className={`mx-1 rounded-full ${
              currentIndex === index
                ? "bg-primary-pink w-3 h-3"
                : "bg-gray-300 w-2 h-2"
            }`}
          />
        ))}
      </View>
    </View>
  );
}