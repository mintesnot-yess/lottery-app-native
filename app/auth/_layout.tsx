import { Stack } from "expo-router";
import "react-native-reanimated";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="Login" />
    </Stack>
  );
}
