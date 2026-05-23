import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";

export default function UpcomingAppointmentCard() {
  return (
    <View className="bg-white mx-4  ">
      
    
      {/* Appointment Card */}
      <View className="border border-gray-200 rounded-2xl p-3">
        
        {/* Top Row */}
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-[12px] text-gray-500 font-medium">
            Aug 12, 2025 • 10:20 AM
          </Text>

          <View className="flex-row items-center">
            <Text className="text-gray-400 text-[12px] mr-2">
              Remind me
            </Text>

            <Switch
              value={true}
              trackColor={{
                false: "#d1d5db",
                true: "#EA580C",
              }}
              thumbColor="#ffffff"
            />
          </View>
        </View>

        {/* Content */}
        <View className="flex-row">
          
          {/* Image */}
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400",
            }}
            className="w-[80px] h-[90px] rounded-xl"
            resizeMode="cover"
          />

          {/* Details */}
          <View className="flex-1 ml-3 justify-center">
            <Text className="text-[18px] font-bold text-black">
              Captain Hair Studio
            </Text>

            <Text className="text-gray-400 text-[13px] mt-1">
              123 Main Street, India
            </Text>

            <View className="flex-row mt-3">
              <Text className="text-gray-500 font-semibold text-[13px]">
                Stylist:
              </Text>

              <Text className="text-gray-400 text-[13px] ml-1">
                John Doe
              </Text>
            </View>

            <View className="flex-row mt-1">
              <Text className="text-gray-500 font-semibold text-[13px]">
                Service:
              </Text>

              <Text className="text-gray-400 text-[13px] ml-1">
                Regular Shaving
              </Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View className="flex-row mt-5">
          
          {/* Cancel */}
          <TouchableOpacity
            className="flex-1 h-[40px] border border-orange-500 rounded-xl items-center justify-center mr-2"
          >
            <Text className="text-orange-500 font-semibold text-base">
              Cancel Booking
            </Text>
          </TouchableOpacity>

          {/* Reschedule */}
          <TouchableOpacity
            className="flex-1 h-[40px] bg-orange-500 rounded-xl items-center justify-center"
          >
            <Text className="text-white font-bold text-base">
              Reschedule
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}