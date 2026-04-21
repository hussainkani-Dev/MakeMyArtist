import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { router } from "expo-router";

export default function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [time, setTime] = useState(159); // 2:39

  const inputs = useRef<TextInput[]>([]);

  // ⏱ Timer
  useEffect(() => {
    if (time === 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // 🔢 Handle OTP change
  const handleChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  // ⬅ Backspace handling
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      {/* Title */}
      <Text className="text-2xl font-semibold text-orange-600 mb-2">
        Email verification.
      </Text>
      <Text className="text-gray-500 mb-10">
        Please type OTP code that we give you
      </Text>

      {/* OTP Boxes */}
      <View className="flex-row justify-between mb-6">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) inputs.current[index] = ref;
            }}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            className={`w-16 h-16 border border-orange-500 text-center text-xl rounded-xl ${
              digit ? "bg-gray-100 text-black" : "bg-gray-100 text-black"
            }`}
          />
        ))}
      </View>

      {/* Resend */}
      <Text className="text-right text-gray-500 mb-10">
        Resend on{" "}
        <Text className="text-orange-600 font-medium">{formatTime()}</Text>
      </Text>

      {/* Button */}
      <TouchableOpacity
        onPress={() => router.push("/screens/NewPassword")}
        className="bg-orange-500 py-4 rounded-full items-center"
      >
        <Text className="text-white font-semibold text-base">Verify Email</Text>
      </TouchableOpacity>
    </View>
  );
}
