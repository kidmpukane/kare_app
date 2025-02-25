import { Stack } from "expo-router";

export default function ProgramsLayout() {
  return (
    <Stack>
      <Stack.Screen name="resultsIndex"  options={{ headerShown: false , title: "nothing"}} />
      <Stack.Screen name="routines" options={{ title: "Routines" }} />
      <Stack.Screen name="programs" options={{ title: "Programs" }}  />
    </Stack>
  );
}
    