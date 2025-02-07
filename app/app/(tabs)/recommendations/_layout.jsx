import { Stack } from "expo-router";

export default function ProgramsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="recommendationsIndex"
        options={{
          title: "ResultIndex",
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
          title: "Programs",
          href: null,
        }}
      />
    </Stack>
  );
}
