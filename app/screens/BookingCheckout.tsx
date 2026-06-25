import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function BookingCheckout() {
  return (
    <SafeAreaView className="flex-1 bg-white pt-14">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-gray-200">
        <TouchableOpacity  onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#0F172A" />
        </TouchableOpacity>

        <Text className="flex-1 text-center text-lg font-semibold text-gray-800 mr-6">
          Booking Checkout
        </Text>
      </View>

      <View className="flex-1 px-4 pt-5">
        {/* Ticket Card */}
        <View className="bg-[#f7ddf3] rounded-3xl p-5 relative overflow-hidden">
          {/* Left Cut */}
          <View className="absolute left-[-12] top-1/2 w-6 h-6 rounded-full bg-white" />

          {/* Right Cut */}
          <View className="absolute right-[-12] top-1/2 w-6 h-6 rounded-full bg-white" />

          {/* Top Details */}
          <View className="flex-row justify-between">
            <View>
              <Text className="text-gray-700">Date</Text>
              <Text className="text-primary-pink font-semibold mt-2">
                March, 10th 2021
              </Text>
            </View>

            <View>
              <Text className="text-gray-700">Start Time</Text>
              <Text className="text-primary-pink font-semibold mt-2">
                10:00 AM
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between mt-5">
            <View>
              <Text className="text-gray-700">Specialist</Text>
              <Text className="text-primary-pink font-semibold mt-2">
                Bella
              </Text>
            </View>

            <View>
              <Text className="text-gray-700">Duration</Text>
              <Text className="text-primary-pink font-semibold mt-2">
                3 hours
              </Text>
            </View>
          </View>

          {/* Divider */}
          <View className="border-t border-gray-300 my-5" />

          {/* Service */}
          <Text className="text-center text-gray-700 mb-5">
            Service
          </Text>

          <View className="flex-row justify-between mb-4">
            <Text className="font-semibold text-gray-800">
              Blunt Cut
            </Text>

            <Text className="font-semibold text-primary-pink">
              $50
            </Text>
          </View>

          <View className="flex-row justify-between mb-6">
            <Text className="font-semibold text-gray-800">
              Manicure
            </Text>

            <Text className="font-semibold text-primary-pink">
              $50
            </Text>
          </View>

          <View className="flex-row justify-between mb-4">
            <Text className="font-semibold text-gray-800">
              Sub Total
            </Text>

            <Text className="font-semibold text-primary-pink">
              $100
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-semibold text-gray-800">
              Discount
            </Text>

            <Text className="font-semibold text-primary-pink">
              -$30
            </Text>
          </View>

          {/* Divider */}
          <View className="border-t border-dashed border-gray-400 my-6" />

          <View className="flex-row justify-between">
            <Text className="text-lg font-bold text-gray-800">
              Total
            </Text>

            <Text className="text-lg font-bold text-primary-pink">
              $70
            </Text>
          </View>

          {/* Payment Card */}
          <TouchableOpacity className="bg-white rounded-full mt-6 px-5 py-4 flex-row items-center justify-between border border-prtext-primary-pink">
            <View className="flex-row items-center">
              {/* Mastercard Icon */}
              <View className="flex-row mr-4">
                <View className="w-5 h-5 bg-red-500 rounded-full" />
                <View className="w-5 h-5 bg-yellow-400 rounded-full -ml-2" />
              </View>

              <View>
                <Text className="font-semibold text-gray-800">
                  Samantha Martin
                </Text>

                <Text className="text-gray-400 text-sm">
                  3124325***
                </Text>
              </View>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#0E7490"
            />
          </TouchableOpacity>
        </View>

        {/* Pay Button */}
        <TouchableOpacity  onPress={() => router.push("/screens/BookingScreen")} className="bg-secondary-purple rounded-full py-5 mt-6">
          <Text className="text-center text-white font-semibold text-lg">
            Pay Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}