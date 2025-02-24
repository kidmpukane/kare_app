import React, { useContext } from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { Stack } from "expo-router";
import { AuthenticationContext, AuthenticationProvider } from "./AuthContext";

const queryClient = new QueryClient()
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticationProvider>
      <AppContent />
    </AuthenticationProvider>
    </QueryClientProvider>
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

