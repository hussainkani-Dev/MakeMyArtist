import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  Alert,
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

  const handleGoogleSignup = () => {
    Alert.alert(
      "Coming Soon",
      "Google Sign Up API integration is currently in progress.",
      [{ text: "OK" }]
    );
  };

  const handleJoinNow = () => {
    // TODO: Call Register API here
    router.push("/screens/EmailVerification");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 mt-10 px-6 pt-6">
          {/* Title */}
          <Text className="text-2xl font-semibold text-primary-pink">
            Create an account
          </Text>

          <Text className="text-gray-500 mt-2">
            Please enter your details to create your account.
          </Text>

          {/* Name */}
          <View className="flex-row items-center border border-primary-pink my-2 rounded-full px-4 py-3">
            <Ionicons name="person-outline" size={18} color="#CF2475" />

            <TextInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              className="ml-3 flex-1 text-gray-700"
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* Email */}
          <View className="flex-row items-center border border-primary-pink my-2 rounded-full px-4 py-3">
            <Ionicons name="mail-outline" size={18} color="#CF2475" />

            <TextInput
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              className="ml-3 flex-1 text-gray-700"
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* Mobile */}
          <View className="flex-row items-center border border-primary-pink my-2 rounded-full px-4 py-3">
            <Text className="mr-2 text-gray-600">🇮🇳 +91</Text>

            <TextInput
              placeholder="Mobile Number"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
              className="flex-1 text-gray-700"
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* Password */}
          <View className="flex-row items-center border border-primary-pink my-2 rounded-full px-4 py-3">
            <Ionicons
              name="lock-closed-outline"
              size={18}
              color="#CF2475"
            />

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
                color="#CF2475"
              />
            </TouchableOpacity>
          </View>

          {/* Terms */}
          <Text className="text-gray-400 text-xs mt-4 leading-5">
            By signing up you agree to our{" "}
            <Text className="text-primary-pink">Terms of Use</Text> and{" "}
            <Text className="text-primary-pink">Privacy Policy</Text>.
          </Text>

          {/* Join */}
          <TouchableOpacity
            onPress={handleJoinNow}
            className="bg-secondary-purple rounded-full py-4 mt-6 items-center"
          >
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

          {/* Google */}
          <TouchableOpacity
            onPress={handleGoogleSignup}
            className="border border-primary-pink rounded-full py-4 flex-row items-center justify-center"
          >
            <Image
              source={require("../../assets/images/icons8-google-100.png")}
              style={{ width: 20, height: 20 }}
            />

            <Text className="ml-2 text-gray-700 font-medium">
              Join with Google
            </Text>
          </TouchableOpacity>

          {/* Footer */}
          <View className="flex-row justify-center mt-6 mb-6">
            <Text className="text-gray-400">
              Already have an account?
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/screens/login")}
            >
              <Text className="text-primary-pink font-medium ml-1">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}