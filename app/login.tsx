import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email != null && email != "") {
      if (password != null && password != "") {
        Alert.alert(email, password);
      }
      console.log("Please enter password");
    } else {
      console.log("Please enter email");
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.Container} source={require("../assets/images/background.jpg")}>
        <View style={styles.Card}>
          <Text style={styles.Title}>Welcome to the Lottery App</Text>
          <Text style={styles.SubTitle}>Login or Sign up to play</Text>
          <KeyboardAvoidingView behavior="padding" style={{ width: "100%", gap: 5, display: "flex" }}>
            <View style={{ width: "100%", gap: 5 }}>
              <Text style={{ fontSize: 15, color: "#383838", marginHorizontal: 5 }}>Email Address</Text>
              <TextInput
                onChange={e => setEmail(e.nativeEvent.text)}
                value={email}
                keyboardType="email-address"
                placeholder="Email Addresss"
                style={styles.Input}
              />
            </View>
            <View style={{ width: "100%", gap: 5 }}>
              <Text style={{ fontSize: 15, color: "#383838", marginHorizontal: 5 }}>Password</Text>
              <TextInput
                onChange={e => setPassword(e.nativeEvent.text)}
                keyboardType="visible-password"
                placeholder="Password"
                value={password}
                style={styles.Input}
              />
            </View>

            <TouchableOpacity onPress={() => handleLogin()} style={styles.SubmitBtn}>
              <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}> LOGIN </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>

          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ fontSize: 18, color: "#a700da", fontWeight: "bold" }}>Don't have an account?</Text>
            <Link href={"/register"} style={{ color: "#a700da", fontSize: 19, textAlign: "center" }}>
              SIGN UP{" "}
            </Link>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: Dimensions.get("screen").height - 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  Card: {
    width: "95%",
    maxWidth: 500,
    padding: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10
  },
  Title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6600da"
  },
  SubTitle: {
    fontSize: 20,
    color: "#6600da"
  },
  Input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    color: "#383838",
    backgroundColor: "#ffffff4f",
    borderWidth: 1,
    borderColor: "#6600da",
    borderRadius: 10
  },
  SubmitBtn: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    backgroundColor: "#a700da",
    borderRadius: 10,
    marginTop: 10
  }
});
