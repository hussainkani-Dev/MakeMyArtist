import React, { useMemo, useRef, useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";

import ProfileHeader from "@/src/components/profile/ProfileHeader";
import SettingsCard from "@/src/components/profile/SettingsCard";
import EditProfileModal from "@/src/components/profile/EditProfileModal";
import SettingsBottomSheet from "@/src/components/profile/SettingsBottomSheet";

export default function Profile() {

  const [editVisible, setEditVisible] = useState(false);

  const [selectedSetting, setSelectedSetting] = useState("");

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["65%"], []);

  const openSetting = (title: string) => {
    setSelectedSetting(title);
    bottomSheetRef.current?.expand();
  };

  return (
    <View className="flex-1 bg-[#F4F4F4]">

      {/* Fixed Header */}

      <ProfileHeader
        onEdit={() => setEditVisible(true)}
      />

      {/* Scroll Area */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >

        <SettingsCard
          onPress={openSetting}
        />

      </ScrollView>

      {/* Edit Profile */}

      <EditProfileModal
        visible={editVisible}
        onClose={() => setEditVisible(false)}
      />

      {/* Bottom Sheet */}

      <SettingsBottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        selectedSetting={selectedSetting}
      />

    </View>
  );
}