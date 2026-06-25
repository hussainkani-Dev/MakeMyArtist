import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from "react-native";
import { router } from "expo-router";
import { ActivityIndicator } from "react-native";
import Svg, { Path } from "react-native-svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useAuthViewModel from "../../src/viewmodel/auth/useAuthViewModel";

export default function Login() {
  const { login, loading, error } = useAuthViewModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="flex-1 bg-white">
        <StatusBar barStyle="light-content" />

        {/* TOP IMAGE */}
        <View className="h-[50%] w-full">
          <Image
            source={require("../../assets/finalImage/login_image.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />

          {/* <View className="absolute w-full bottom-32 left-0">
              <Text className="text-white text-center text-4xl font-bold">
                Let&apos;s get you Login!
              </Text>
              <Text className="text-white text-center text-lg mt-2">
                Enter your information below.
              </Text>
            </View> */}
        </View>

        {/* CARD */}
        <View className="flex-1 relative -top-10 bg-white w-[95%] mx-auto rounded-[30px] px-6 pt-10 py-6 shadow-black min-h-full">
          {/* Google */}
         <TouchableOpacity className="border border-gray-300 rounded-xl py-3 mb-4 items-center flex-row justify-center">
  <Image
    source={require("../../assets/images/icons8-google-100.png")}
    style={{ width: 20, height: 20 }}
  />
  <Text className="ml-2 text-gray-700 flex-shrink">
    Sign In with Google
  </Text>{" "}
</TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-4">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-2 text-primary-purple font-medium text-sm">Or login with </Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Email */}
          <Text className="text-primary-pink text-sm mb-1">Email Address</Text>
          <TextInput
            placeholder="Enter your email..."
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="border-b border-gray-300 text-black rounded-xl px-4 py-3 mb-4"
          />

          {/* Password */}
          <Text className="text-primary-pink text-sm mb-1">Password</Text>
          <View className="border-b border-gray-300 rounded-xl flex-row items-center px-4">
            <TextInput
              placeholder="Enter password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              className="flex-1 text-black py-3"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          {/* Forgot */}
          <TouchableOpacity className="mt-2 mb-6 flex flex-row justify-between">
             {error && (
            <Text className="text-red-500 text-center mb-2">{error}</Text>
          )}
            <Text className="text-primary-pink text-sm flex-shrink">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Error */}
         

          {/* Login */}
          <TouchableOpacity
            onPress={() => login(email, password)}
            disabled={loading}
            className="bg-secondary-purple py-4 rounded-full items-center"
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text className="text-white font-semibold text-lg">Login</Text>
            )}
          </TouchableOpacity>

          {/* Bottom */}
          <View className="mt-6 flex-row justify-center">
            <Text className="text-gray-500">Don&apos;t have an account?</Text>
            <TouchableOpacity>
              <Text
                className="text-primary-pink font-semibold ml-1"
                onPress={() => router.push("/screens/SignUp")}
              >
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
