import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const ACTIVE_COLOR = "#CF2475";
const INACTIVE_COLOR = "transparent";

const TabIcon = ({ name, focused }: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        marginTop: 30,
        backgroundColor: focused ? ACTIVE_COLOR : INACTIVE_COLOR,
      }}
    >
      <Ionicons
        name={focused ? name : `${name}-outline`}
        size={22}
        color={focused ? "#ffffff" : "#CF2475"}
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 68,
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },
        tabBarShowLabel: false,
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="home" focused={focused} />
          ),
        }}
      />

      {/* Booking */}
      <Tabs.Screen
        name="booking"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="calendar" focused={focused} />
          ),
        }}
      />

      {/* Promotion */}
      <Tabs.Screen
        name="promotion"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="construct" focused={focused} />
          ),
        }}
      />

      {/* Chat */}
      <Tabs.Screen
        name="ChatScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="chatbubble" focused={focused} />
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="person" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
