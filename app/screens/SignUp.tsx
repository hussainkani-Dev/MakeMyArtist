import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 mt-10 px-6 pt-6">
          {/* Title */}
          <Text className="text-2xl font-semibold text-orange-600">
            Create an account,
          </Text>
          <Text className="text-gray-500 mt-2">
            Please type full information below and we can create your account
          </Text>

          {/* Form */}
          <View className="mt-6 space-y-6">
            {/* Name */}
            <View className="flex-row items-center border border-orange-500 my-2 rounded-full px-4 py-3">
              <Ionicons name="person-outline" size={18} color="#6b7280" />
              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                className="ml-3 flex-1 text-gray-700"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Email */}
            <View className="flex-row items-center border border-orange-500 my-2 rounded-full px-4 py-3">
              <Ionicons name="mail-outline" size={18} color="#6b7280" />
              <TextInput
                placeholder="Email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                className="ml-3 flex-1 text-gray-700"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Mobile */}
            <View className="flex-row items-center border border-orange-500 my-2  rounded-full px-4 py-3">
              <Text className="mr-2 text-gray-600">🇮🇳 +01</Text>
              <TextInput
                placeholder="Mobile number"
                value={mobile}
                onChangeText={setMobile}
                keyboardType="phone-pad"
                className="flex-1 text-gray-700"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Password */}
            <View className="flex-row items-center border my-2   border-orange-500 rounded-full px-4 py-3">
              <Ionicons name="lock-closed-outline" size={18} color="#6b7280" />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                className="ml-3 flex-1 text-gray-700"
                placeholderTextColor="#9ca3af"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={18}
                  color="#6b7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms */}
          <Text className="text-gray-400 text-xs mt-4 leading-5">
            By signing up you agree to our{" "}
            <Text className="text-oborder-orange-500">Term of use</Text> and{" "}
            <Text className="text-oborder-orange-500">privacy notice</Text>
          </Text>

          {/* Button */}
          <TouchableOpacity className="bg-orange-600 rounded-full py-4 mt-6 items-center">
            <Text className="text-white font-semibold text-base">
              Join Now
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-3 text-gray-400">or</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Google Button */}
          <TouchableOpacity className="border border-orange-500 rounded-full py-4 flex-row items-center justify-center">
            <Ionicons name="logo-google" size={18} color="#DB4437" />
            <Text className="ml-2 text-gray-700 font-medium" onPress={() => router.push("/screens/locationSearchView")}>
              Join with Google
            </Text>
          </TouchableOpacity>

          {/* Footer */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400">
              Already have an account?{" "}
            </Text>
            <Text className="text-oborder-orange-500 font-medium" onPress={() => router.push("/screens/login")}>Sign In</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}