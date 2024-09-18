import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
        .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        .replace(/AM|PM/, "");

      setCurrentTime(now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView>
      <ThemedView style={styles.header}>
        <FontAwesome name="money" color={"#9E08B7"} size={17} />
        <FontAwesome name="dollar" color={"#9E08B7"} size={15}>
          100
        </FontAwesome>
      </ThemedView>
      <ScrollView style={styles.Container}>
        <LinearGradient colors={["#6100FF", "#DB00FF"]} style={styles.CardContainer}>
          <ThemedView style={styles.CardDetail}>
            <ThemedText style={{ color: "#fff", fontSize: 19 }}>Win up to </ThemedText>
            <ThemedText style={{ paddingTop: 15, color: "#fff", fontSize: 40, fontWeight: "bold" }}>{"$10000"}</ThemedText>

            <Link href={"/games/Numbers"} style={styles.button}>
              <ThemedText style={styles.text}> Play now</ThemedText>
            </Link>
          </ThemedView>
          <ThemedView style={styles.CardCounting}>
            <LinearGradient colors={["#DB00FF", "#6100FF"]} style={styles.CirculeCounter}>
              <ThemedText style={{ color: "#fff", fontSize: 25, padding: 3 }}>{currentTime}</ThemedText>
            </LinearGradient>
          </ThemedView>
        </LinearGradient>

        <LinearGradient colors={["#9E08B7", "#DB00FF"]} style={styles.CardContainer}>
          <ThemedView style={styles.ListContainer}>
            <ThemedText style={{ fontSize: 20, color: "#fff", textAlign: "center", textTransform: "uppercase" }}>
              Winner List
            </ThemedText>

            <ThemedView style={styles.WinnerList}>
              <Image
                source={require("@/assets/images/face18.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100, objectFit: "cover" }}
              />

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"$10000"}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.WinnerList}>
              <Image
                source={require("@/assets/images/face17.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100, objectFit: "cover" }}
              />

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"$10000"}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.WinnerList}>
              <Image
                source={require("@/assets/images/face6.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100, objectFit: "cover" }}
              />

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"$10000"}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.WinnerList}>
              <Image
                source={require("@/assets/images/face1.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100, objectFit: "cover" }}
              />

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 16 }}>{"$10000"}</ThemedText>
            </ThemedView>
          </ThemedView>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%"
  },

  header: {
    width: "93%",
    marginHorizontal: "auto",

    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cdcdcd",
    backgroundColor: "transparent"
  },

  CardContainer: {
    width: "95%",
    marginHorizontal: "auto",
    marginVertical: 20,
    paddingVertical: 25,

    borderRadius: 10,
    display: "flex",
    flexDirection: "row"
  },
  CardDetail: {
    flex: 1,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#6100FF"
  },
  CardCounting: {
    flex: 1,

    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center"
  },
  CirculeCounter: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: "#6100FF",
    justifyContent: "center",
    alignItems: "center"
  },
  ListContainer: {
    flex: 1,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  WinnerList: {
    width: "95%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 2,

    borderRadius: 5,
    backgroundColor: "transparent",
    borderTopWidth: 1,
    borderTopColor: "#ffffff61"
  }
});
