import { useRouter } from "expo-router";
import { useEffect, useContext } from "react";
import { AuthenticationContext } from "./AuthContext";

export default function Index() {
  const { authInfo } = useContext(AuthenticationContext); // Access authentication state
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (authInfo?.authCookie) {
        // If authenticated, navigate to the main app
        router.push("/app/(tabs)/home");
      } else {
        // If not authenticated, navigate to the auth stack
        router.push("/auth/signIn");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [authInfo, router]);

  return null; // Render nothing
}
