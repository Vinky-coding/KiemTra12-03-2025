import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const insights = [
    { title: "Scan new", count: "Scanned 483", icon: "scan-outline" },
    { title: "Counterfeits", count: "Counterfeited 32", icon: "alert-circle-outline" },
    { title: "Success", count: "Checkouts 8", icon: "checkmark-circle-outline" },
    { title: "Directory", count: "History 26", icon: "calendar-outline" },
  ];

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F8F9FB" }}>
    {/* Profile Section */}
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello 👋</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>Christie Doe</Text>
      </View>
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5grUs4l4baz58MKVXcFnXsGO3oB5G2ET5XA&s" }} // Replace with actual profile image URL
        style={{ width: 50, height: 50, borderRadius: 10 }}
      />
    </View>

    <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Your Insights</Text>
    <FlatList
      data={insights}
      numColumns={2}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            margin: 10,
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 5,
          }}>
          <Ionicons name={item.icon} size={32} color="#6C63FF" />
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>{item.title}</Text>
          <Text style={{ color: "gray" }}>{item.count}</Text>
        </View>
      )}
    />
  </View>
);
};

const ScanScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F8F9FB" }}>
      <TouchableOpacity style={{ position: "absolute", top: 40, left: 20 }}>
        <Ionicons name="arrow-back" size={32} color="#000" />
      </TouchableOpacity>
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBa13YojDNfEfDH1XbSfHy9tpZJAJ_kH4HA&s" }}
        style={{ width: 300, height: 400, borderRadius: 20 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 40,
          backgroundColor: "white",
          padding: 15,
          borderRadius: 20,
          flexDirection: "row",
          alignItems: "center",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 5,
        }}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontWeight: "bold" }}>Lauren's</Text>
          <Text style={{ color: "gray" }}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 20 }}>
          <Ionicons name="add-circle" size={40} color="#6C63FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} /> }} />
      <Tab.Screen name="Scan" component={ScanScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="scan-outline" size={24} color={color} /> }} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}