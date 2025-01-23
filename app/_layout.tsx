import React, { useContext } from "react";
import { Stack } from "expo-router";
import { AuthenticationContext, AuthenticationProvider } from "./AuthContext";

export default function RootLayout() {
  return (
    <AuthenticationProvider>
      <AppContent />
    </AuthenticationProvider>
  );
}

const AppContent = () => {
  const { authInfo } = useContext(AuthenticationContext); // Access auth state from context
  const sessionId = authInfo?.sessionId;

  console.log("authState:", authInfo);
  console.log("sessionId:", sessionId);


  return (
    <Stack>
      {sessionId ? (
        <Stack.Screen name="app" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      )}
    </Stack>
  );
};

