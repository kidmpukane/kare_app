import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#10101E'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}
    
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signIn" options={{ title: "Sign In" }} />
      <Stack.Screen name="signUp" options={{ title: "Sign Up" }} />
    </Stack>
  );
}

