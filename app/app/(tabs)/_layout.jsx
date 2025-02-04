import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs>
      {/* <Tabs.Screen
        name="appIndex"
        options={{
          href: null,
        }}
      /> */}
      <Tabs.Screen
        name="assessment"
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
          title: "Home",
          tabBarIcon: () => <FontAwesome name="home" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <FontAwesome name="user" />,
        }}
      />
      <Tabs.Screen
        name="results"
        options={{
          title: "Results",
          tabBarIcon: () => <FontAwesome name="pie-chart" />,
        }}
      />
    </Tabs>
  );
}
