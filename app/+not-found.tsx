import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-8xl font-bold text-pink-600">
        404
      </Text>

      <Text className="mt-5 text-2xl font-bold text-gray-900">
        Page Not Found
      </Text>

      <Text className="mt-3 text-center text-gray-500">
        Sorry, the page you are looking for doesn't exist.
      </Text>

      <TouchableOpacity
        onPress={() => router.replace("/(tabs)")}
        className="mt-8 rounded-xl bg-pink-600 px-8 py-4"
      >
        <Text className="text-lg font-semibold text-white">
          Return Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}