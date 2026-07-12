import { View, Image, Dimensions } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();
  const translateX = useSharedValue(-width);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(width, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1,
      false
    );

    checkApp();
  }, []);

  const checkApp = async () => {
    const hasSeen = await AsyncStorage.getItem("hasSeenOnboarding");
    const token = await AsyncStorage.getItem("accessToken");

    setTimeout(() => {
      if (hasSeen !== "true") {
        router.replace("/screens/Onboarding");
        return;
      }

      if (token) {
        router.replace("/(tabs)");
      } else {
        router.replace("/screens/login");
      }
    }, 3000);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="overflow-hidden">
        <Image
          source={require("../../assets/images/Splash_Imgae_final.jpeg")}
          style={{ width: 220, height: 220 }}
          resizeMode="contain"
        />

        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              width: 100,
              height: 220,
              opacity: 0.6,
            },
            animatedStyle,
          ]}
        >
          <LinearGradient
            colors={["transparent", "rgba(255,255,255,0.7)", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              height: "100%",
              transform: [{ rotate: "25deg" }],
            }}
          />
        </Animated.View>
      </View>
    </View>
  );
}