import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';


export default function TabsLayout() {
  return (
    <Tabs   
    screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#24221E',
        borderRadius: 15,
        height: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        borderWidth: 1,
        borderColor: '#ffffff'
      }
    }}> 
      <Tabs.Screen
        name="products"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="routines"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="tabsAppIndex"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Homes",
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="home" color="white" />,
        }}
      />

      <Tabs.Screen
        name="results"
        options={{
          title: "Results",
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="pie-chart" color="white" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: () => <FontAwesome name="user" color="white" />,
        }}
      />
    </Tabs>
  );
}
