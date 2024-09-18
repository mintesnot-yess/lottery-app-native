import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <>
      <SafeAreaView>
        <Link style={{ margin: 20, padding: 10, backgroundColor: "silver", borderRadius: 10 }} href={"/login"}>
          LOGIN
        </Link>
        <Link style={{ margin: 20, padding: 10, backgroundColor: "silver", borderRadius: 10 }} href={"/register"}>
          REGISTER
        </Link>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute"
  }
});
