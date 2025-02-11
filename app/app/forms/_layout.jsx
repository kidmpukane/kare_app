import { Stack } from "expo-router";

export default function FormLayout() {
  return (
    <Stack>
      <Stack.Screen name="formIndex" options={{ title: "FormIndex" }} />
      <Stack.Screen name="assessment" options={{ title: "Assessment" }} />
      <Stack.Screen name="questionnaire" options={{ title: "Questionnaire" }} />
    </Stack>
  );
}
