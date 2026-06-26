import React, { forwardRef, useState } from "react";
import { Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

type Props = {
  snapPoints: string[];
  selectedSetting: string;
};

const SettingsBottomSheet = forwardRef<BottomSheet, Props>(
  ({ snapPoints, selectedSetting }, ref) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [push, setPush] = useState(true);
    const [email, setEmail] = useState(true);
    const [sms, setSms] = useState(false);

    const renderContent = () => {
      switch (selectedSetting) {
        case "Personal Information":
          return (
            <>
              <Text className="text-lg font-semibold mb-5">
                Personal Information
              </Text>

              <Text className="mb-2">Name</Text>

              <TextInput
                placeholder="sample user"
                className="border rounded-xl px-4 h-14 mb-4"
              />

              <Text className="mb-2">Email</Text>

              <TextInput
                placeholder="sample@email.com"
                className="border rounded-xl px-4 h-14 mb-4"
              />

              <Text className="mb-2">Phone</Text>

              <TextInput
                placeholder="+91 987654321"
                className="border rounded-xl px-4 h-14 mb-4"
              />

              <TouchableOpacity className="bg-primary-pink rounded-xl h-14 items-center justify-center mt-3">
                <Text className="text-white font-bold">Save</Text>
              </TouchableOpacity>
            </>
          );
        case "Password & Security":
          return (
            <>
              <Text className="text-lg font-semibold mb-5">
                Change Password
              </Text>

              <Text className="mb-2">Old Password</Text>

              <TextInput
                secureTextEntry
                value={oldPassword}
                onChangeText={setOldPassword}
                className="border rounded-xl px-4 h-14 mb-4"
              />

              <Text className="mb-2">New Password</Text>

              <TextInput
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
                className="border rounded-xl px-4 h-14 mb-4"
              />

              <Text className="mb-2">Confirm Password</Text>

              <TextInput
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                className="border rounded-xl px-4 h-14"
              />

              <TouchableOpacity className="bg-primary-pink rounded-xl h-14 items-center justify-center mt-5">
                <Text className="text-white font-bold">Update Password</Text>
              </TouchableOpacity>
            </>
          );

        case "Notification Preferences":
          return (
            <>
              <Text className="text-lg font-semibold mb-5">Notifications</Text>

              <View className="flex-row justify-between items-center py-4">
                <Text>Push Notifications</Text>

                <Switch value={push} onValueChange={setPush} />
              </View>

              <View className="flex-row justify-between items-center py-4">
                <Text>Email Notifications</Text>

                <Switch value={email} onValueChange={setEmail} />
              </View>

              <View className="flex-row justify-between items-center py-4">
                <Text>SMS Notifications</Text>

                <Switch value={sms} onValueChange={setSms} />
              </View>
            </>
          );

        case "Friends & Social":
          return (
            <>
              <Text className="text-lg font-semibold mb-5">
                Friends & Social
              </Text>

              <Text className="text-gray-500 leading-7">
                Connect with your friends and share your bookings, reviews and
                favourite salons.
              </Text>
            </>
          );

        case "Privacy Policy":
          return (
            <>
              <Text className="text-lg font-semibold mb-5">Privacy Policy</Text>

              <Text className="leading-7 text-gray-500">
                Your privacy is important to us.
                {"\n\n"}
                We collect only the information required to improve your
                experience.
                {"\n\n"}
                Your information is never sold to third parties.
                {"\n\n"}
                All personal data is encrypted and securely stored.
                {"\n\n"}
                Version 1.0
              </Text>
            </>
          );

        case "Terms & Conditions":
          return (
            <>
              <Text className="text-lg font-semibold mb-5">
                Terms & Conditions
              </Text>

              <Text className="leading-7 text-gray-500">
                By using this application you agree to our booking policies,
                cancellation rules and payment conditions.
              </Text>
            </>
          );

        case "Help & Support":
          return (
            <>
              <Text className="text-lg font-semibold mb-5">Help & Support</Text>

              <Text className="leading-7 text-gray-500">
                Email
                {"\n"}
                support@makemyartist.com
                {"\n\n"}
                Phone
                {"\n"}
                +91 9876543210
              </Text>
            </>
          );

        default:
          return <Text className="text-center mt-10">Select a setting</Text>;
      }
    };

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
      >
        <BottomSheetScrollView
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 80,
          }}
        >
          {renderContent()}
        </BottomSheetScrollView>
      </BottomSheet>
    );
  },
);

export default SettingsBottomSheet;
