import { Button, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <ScrollView style={styles.Container}>
        <LinearGradient colors={["#6100FF", "#DB00FF"]} style={styles.CardContainer}>
          <ThemedView style={styles.CardDetail}>
            <ThemedText style={{ color: "#fff", fontSize: 19 }}>Win up to </ThemedText>
            <ThemedText style={{ paddingTop: 15, color: "#fff", fontSize: 40, fontWeight: "bold" }}>ET1000</ThemedText>

            <Button title="play now" />
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

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 18 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>10000</ThemedText>
            </ThemedView>
            <ThemedView style={styles.WinnerList}>
              <Image
                source={require("@/assets/images/face17.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100, objectFit: "cover" }}
              />

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 18 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>10000</ThemedText>
            </ThemedView>
            <ThemedView style={styles.WinnerList}>
              <Image
                source={require("@/assets/images/face6.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100, objectFit: "cover" }}
              />

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 18 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>10000</ThemedText>
            </ThemedView>
            <ThemedView style={styles.WinnerList}>
              <Image
                source={require("@/assets/images/face1.jpg")}
                style={{ width: 30, height: 30, borderRadius: 100, objectFit: "cover" }}
              />

              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>Mintesnot</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 18 }}>{"02/09/24"}</ThemedText>
              <ThemedText style={{ width: 100, overflow: "hidden", color: "#fff", fontSize: 20 }}>10000</ThemedText>
            </ThemedView>
          </ThemedView>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%"
  },
  CardContainer: {
    width: "95%",
    marginHorizontal: "auto",
    marginVertical: 20,
    paddingVertical: 20,

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
    paddingVertical: 12,
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
    padding: 5,

    borderRadius: 5,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ffffff61"
  }
});
