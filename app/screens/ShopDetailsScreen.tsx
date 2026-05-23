// screens/ShopDetailsScreen.tsx

import React from "react";
import {
  ScrollView,
  SafeAreaView,
} from "react-native";

import ShopHeader from "../../src/components/artistScreen/ShopHeader";
import ActionButtons from "../../src/components/artistScreen/ActionButtons";
import TabsSection from "../../src/components/artistScreen/TabsSection";
import ServicesSection from "../../src/components/artistScreen/ServicesSection";

export default function ShopDetailsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ShopHeader />

        <ActionButtons />

        <TabsSection />

        <ServicesSection />
      </ScrollView>
    </SafeAreaView>
  );
}