import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { View } from "react-native";
import { useAuth } from "@/src/context/AuthContext";

const ACTIVE_COLOR = "#CF2475";
const INACTIVE_COLOR = "transparent";

const TabIcon = ({ name, focused }: any) => (
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
      color={focused ? "#fff" : "#CF2475"}
    />
  </View>
);

export default function TabLayout() {
  const { token, loading } = useAuth();

  if (loading) return null;

  if (!token) {
    return <Redirect href="/screens/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="home" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="booking"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="calendar" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="promotion"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="construct" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="ChatScreen"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="chatbubble" focused={focused} />
          ),
        }}
      />

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