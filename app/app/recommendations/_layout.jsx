import { Stack } from "expo-router";

export default function ProgramsLayout() {
  return (
    <Stack>
      <Stack.Screen name="resultsIndex" options={{ title: "ResultsIn" }} />
      <Stack.Screen name="routines" options={{ title: "Routines" }} />
      <Stack.Screen name="programs" options={{ title: "Programs" }} />
    </Stack>
  );
}
