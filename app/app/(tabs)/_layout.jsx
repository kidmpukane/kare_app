import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

// Define the COLORS object
const COLORS = {
  ORANGE: '#EEC9B5',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export default function TabsLayout() {
  return (
    <Tabs
      activeColor="#e91e63"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
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
          borderColor: '#ffffff',
        },
        tabBarActiveTintColor: COLORS.ORANGE,
        tabBarInactiveTintColor: COLORS.WHITE,
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.ORANGE : COLORS.WHITE;
          return <IconComponent name={route.name} color={tintColor} />;
        },
      })}
    >
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
          tabBarIcon: ({ color }) => <Entypo name="home" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="results"
        options={{
          title: "Results",
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}

const IconComponent = ({ name, color }) => {
  switch (name) {
    case 'home':
      return <Entypo name="home" size={20} color={color} />;
    case 'results':
      return <AntDesign name="piechart" size={20} color={color} />;
    case 'profile':
      return <FontAwesome name="user" size={20} color={color} />;
    default:
      return null;
  }
};  