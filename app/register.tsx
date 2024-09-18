import { Link } from "expo-router";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <ImageBackground style={styles.Container} source={require("../assets/images/background.jpg")}>
            <View style={styles.Card}>
              <Text style={styles.Title}>Sign up</Text>

              <KeyboardAvoidingView style={{ width: "100%", gap: 5, display: "flex" }}>
                <View style={{ width: "100%", gap: 5 }}>
                  <Text style={{ fontSize: 15, color: "#383838", marginHorizontal: 5 }}>User Name</Text>
                  <TextInput keyboardType="default" placeholder="User Name" style={styles.Input} />
                </View>

                <View style={{ width: "100%", gap: 5 }}>
                  <Text style={{ fontSize: 15, color: "#383838", marginHorizontal: 5 }}>Email Address</Text>
                  <TextInput keyboardType="email-address" placeholder="Email Addresss" style={styles.Input} />
                </View>
                <View style={{ width: "100%", gap: 5 }}>
                  <Text style={{ fontSize: 15, color: "#383838", marginHorizontal: 5 }}>Phone Number</Text>
                  <TextInput keyboardType="phone-pad" placeholder="Phone Number" style={styles.Input} />
                </View>

                <View style={{ width: "100%", gap: 5 }}>
                  <Text style={{ fontSize: 15, color: "#383838", marginHorizontal: 5 }}>Password</Text>
                  <TextInput keyboardType="visible-password" placeholder="Password" style={styles.Input} />
                </View>

                <View style={{ width: "100%", gap: 5 }}>
                  <Text style={{ fontSize: 15, color: "#383838", marginHorizontal: 5 }}>Password confirmation</Text>
                  <TextInput keyboardType="visible-password" placeholder="confirmation" style={styles.Input} />
                </View>

                <TouchableOpacity style={styles.SubmitBtn}>
                  <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}> SIGNUP </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>

              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={{ fontSize: 18, color: "#a700da", fontWeight: "bold" }}>Have an account?</Text>
                <Link href={"/login"} style={{ color: "#a700da", fontSize: 19, textAlign: "center" }}>
                  LOGIN{" "}
                </Link>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </View>
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
    color: "#fff"
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
