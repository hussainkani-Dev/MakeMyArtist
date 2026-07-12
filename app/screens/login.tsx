import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import useAuthViewModel from "../../src/viewmodel/auth/useAuthViewModel";

export default function Login() {
  const { login, loading, error } = useAuthViewModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    Alert.alert(
      "Coming Soon",
      "Google Sign In API integration is currently in progress. Please use Email and Password to login.",
      [{ text: "OK" }],
    );
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-1 bg-white">
        <StatusBar barStyle="light-content" />

        {/* Top Image */}
        <View className="h-[50%] w-full">
          <Image
            source={require("../../assets/finalImage/login_image.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>

        {/* Card */}
        <View className="flex-1 relative -top-10 bg-white w-[95%] mx-auto rounded-[30px] px-6 pt-10 py-6">
          {/* Google */}
          <TouchableOpacity
            onPress={handleGoogleLogin}
            className="border border-gray-300 rounded-xl py-3 mb-4 items-center flex-row justify-center"
          >
            <Image
              source={require("../../assets/images/icons8-google-100.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text className="ml-2 text-gray-700">Sign In with Google</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-4">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-2 text-primary-purple text-sm">
              Or login with
            </Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Email */}
          <Text className="text-primary-pink mb-2">Email Address</Text>

          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            className="border-b border-gray-300 px-4 py-3 mb-5"
          />

          {/* Password */}
          <Text className="text-primary-pink mb-2">Password</Text>

          <View className="border-b border-gray-300 flex-row items-center px-4">
            <TextInput
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              className="flex-1 py-3"
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {/* Error */}
          {error && <Text className="text-red-500 mt-3">{error}</Text>}

          {/* Forgot */}
          <TouchableOpacity className="mt-3 mb-6">
            <Text className="text-primary-pink">Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            onPress={() => login(email, password)}
            disabled={loading}
            className={`bg-secondary-purple py-4 rounded-full items-center ${
              loading ? "opacity-70" : ""
            }`}
          >
            {loading ? (
              <View className="flex-row items-center">
                <ActivityIndicator color="#fff" size="small" />
                <Text className="text-white ml-2 font-semibold">
                  Logging in...
                </Text>
              </View>
            ) : (
              <Text className="text-white text-lg font-semibold">Login</Text>
            )}
          </TouchableOpacity>

          {/* Register */}
          <View className="mt-6 flex-row justify-center">
            <Text className="text-gray-500">Don't have an account?</Text>

            <TouchableOpacity onPress={() => router.push("/screens/SignUp")}>
              <Text className="text-primary-pink font-semibold ml-1">
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
