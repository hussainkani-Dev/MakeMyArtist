import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Keyboard,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function EditProfileModal({ visible, onClose }: Props) {
  const [name, setName] = useState("sample user");
  const [email, setEmail] = useState("sample@email.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [address, setAddress] = useState("Mumbai, India");

  const handleSave = () => {
    // TODO:
    // Call your update profile API here

    console.log({
      name,
      email,
      phone,
      address,
    });

    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-end bg-black/40">
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <View className="bg-white rounded-t-[35px] px-6 pt-6 pb-10">
              {/* Handle */}

              <View className="w-14 h-1.5 rounded-full bg-gray-300 self-center mb-6" />

              {/* Header */}

              <View className="flex-row items-center justify-between">
                <Text className="text-2xl font-bold text-gray-800">
                  Edit Profile
                </Text>

                <TouchableOpacity onPress={onClose}>
                  <Ionicons name="close" size={28} color="#555" />
                </TouchableOpacity>
              </View>

              {/* Name */}

              <Text className="mt-6 mb-2 font-semibold text-gray-700">
                Full Name
              </Text>

              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                className="border border-gray-300 rounded-xl px-4 h-14"
              />

              {/* Email */}

              <Text className="mt-5 mb-2 font-semibold text-gray-700">
                Email
              </Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                className="border border-gray-300 rounded-xl px-4 h-14"
              />

              {/* Phone */}

              <Text className="mt-5 mb-2 font-semibold text-gray-700">
                Phone
              </Text>

              <TextInput
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                className="border border-gray-300 rounded-xl px-4 h-14"
              />

              {/* Address */}

              <Text className="mt-5 mb-2 font-semibold text-gray-700">
                Address
              </Text>

              <TextInput
                value={address}
                onChangeText={setAddress}
                className="border border-gray-300 rounded-xl px-4 h-14"
              />

              {/* Buttons */}

              <View className="flex-row mt-8">
                <TouchableOpacity
                  onPress={onClose}
                  className="flex-1 h-14 rounded-xl border border-primary-pink items-center justify-center mr-2"
                >
                  <Text className="text-primary-pink font-bold">Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleSave}
                  className="flex-1 h-14 rounded-xl bg-primary-pink items-center justify-center ml-2"
                >
                  <Text className="text-white font-bold">Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
