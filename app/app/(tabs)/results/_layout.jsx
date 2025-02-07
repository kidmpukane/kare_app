import { Stack } from "expo-router";

export default function ProgramsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="resultsIndex"
        options={{
          title: "Programs",
          href: null,
        }}
      />
      <Stack.Screen
        name="routines"
        options={{
          title: "Routines",
          href: null,
        }}
      />
      <Stack.Screen
        name="programs"
        options={{
          title: "Routines",
          href: null,
        }}
      />
    </Stack>
  );
}
