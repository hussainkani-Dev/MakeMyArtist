import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 justify-center bg-white px-6 pt-16"
    >
      {/* Title */}
      <Text className="text-2xl font-semibold text-orange-600 mb-2">
        New password,
      </Text>
      <Text className="text-gray-500 mb-10">
        Now, you can create new password and confirm it below
      </Text>

      {/* Password Input */}
      <View className="flex-row items-center border border-orange-600 bg-gray-100 rounded-full px-4 py-4 mb-4">
        <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="New password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="flex-1 ml-3 text-gray-700"
        />
      </View>

      {/* Confirm Password */}
      <View className="flex-row items-center border border-orange-600 bg-gray-100 rounded-full px-4 py-4 mb-10">
        <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="Confirm new password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          className="flex-1 ml-3 text-gray-700"
        />
      </View>

      {/* Button */}
      <TouchableOpacity className="bg-orange-500 py-4 rounded-full items-center" onPress={() => router.push("/screens/login")}>
        <Text className="text-white font-semibold text-base">
          Confirm New Password
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}