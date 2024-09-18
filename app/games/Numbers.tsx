import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Numbers() {
  // var numbers1: number | null = null;
  // var numbers2: number | null = null;
  // var numbers3: number | null = null;
  // var numbers4: number | null = null;
  // var numbers5: number | null = null;

  const [numbers1, setNumber1] = React.useState(null);
  const [numbers2, setNumber2] = React.useState(null);
  const [numbers3, setNumber3] = React.useState(null);
  const [numbers4, setNumber4] = React.useState(null);
  const [numbers5, setNumber5] = React.useState(null);

  const storeData = async (myKeye: any, value: any) => {
    try {
      await AsyncStorage.setItem(myKeye, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      AsyncStorage.getItem("numbers1").then(value => {
        if (value !== null) {
          setNumber1(Number(value));
        }
      });
      AsyncStorage.getItem("numbers2").then(value => {
        if (value !== null) {
          setNumber2(Number(value));
        }
      });
      AsyncStorage.getItem("numbers3").then(value => {
        if (value !== null) {
          setNumber3(Number(value));
        }
      });
      AsyncStorage.getItem("numbers4").then(value => {
        if (value !== null) {
          setNumber4(Number(value));
        }
      });
      AsyncStorage.getItem("numbers5").then(value => {
        if (value !== null) {
          setNumber5(Number(value));
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  function addNumbers(numbers: any) {
    if (numbers1 === null) {
      // numbers1 = numbers;

      setNumber1(numbers);

      storeData("numbers1", numbers);
    } else if (numbers2 === null) {
      setNumber2(numbers);
      storeData("numbers2", numbers);
      console.log(numbers2);
    } else if (numbers3 === null) {
      setNumber3(numbers);
      storeData("numbers3", numbers);
    } else if (numbers4 === null) {
      setNumber4(numbers);
      storeData("numbers4", numbers);
    } else if (numbers5 === null) {
      setNumber5(numbers);
      storeData("numbers5", numbers);
    } else {
      alert("choose only 5 numbers");
    }
  }

  const makePaymentRequest = () => {
    if (numbers1 !== null && numbers2 !== null && numbers3 !== null && numbers4 !== null && numbers5 !== null) {
      const total = numbers1 + "," + numbers2 + "," + numbers3 + "," + numbers4 + "," + numbers5;
      Alert.alert("Your Tiket Number Is " + total, "You Want To Pay $10 ", [
        {
          text: "Cancel",
          style: "destructive",
          isPreferred: true,
          onPress: () => {
            console.log("faild");
          }
        },
        {
          text: "Yes",
          onPress: () => {
            Alert.alert("Payment successful", "You TIket number  " + total);
          }
        }
      ]);
    } else {
      alert("Please choose 5 numbers");
    }
  };

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clearAll = () => {
    Alert.alert("remove Itomes ", "You Want remove all itoms ", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("canceled");
        }
      },

      {
        text: "Yes",
        onPress: () => {
          Alert.alert("Payment successful", "You TIket number  ");
          storeData("numberBtns", false);
          AsyncStorage.removeItem("numbers1");
          AsyncStorage.removeItem("numbers2");
          AsyncStorage.removeItem("numbers3");
          AsyncStorage.removeItem("numbers4");
          AsyncStorage.removeItem("numbers5");
        }
      }
    ]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.DisplayPannel}>
            <Text onPress={() => setNumber1(null)} style={numbers1 === null ? styles.EmpDiaplayBox : styles.DiaplayBox}>
              {numbers1}
            </Text>
            <Text onPress={() => setNumber2(null)} style={numbers2 === null ? styles.EmpDiaplayBox : styles.DiaplayBox}>
              {numbers2}
            </Text>
            <Text onPress={() => setNumber3(null)} style={numbers3 === null ? styles.EmpDiaplayBox : styles.DiaplayBox}>
              {numbers3}
            </Text>
            <Text onPress={() => setNumber4(null)} style={numbers4 === null ? styles.EmpDiaplayBox : styles.DiaplayBox}>
              {numbers4}
            </Text>
            <Text onPress={() => setNumber5(null)} style={numbers5 === null ? styles.EmpDiaplayBox : styles.DiaplayBox}>
              {numbers5}
            </Text>
          </View>

          <Text style={{ textAlign: "center", fontSize: 25, color: "#5a0cad" }}>Choose 5 numbers</Text>

          <View style={styles.ButtonContainer}>
            <Text onPress={() => addNumbers(Number(1))} style={styles.Buttons}>
              1
            </Text>
            <Text onPress={() => addNumbers(Number(2))} style={styles.Buttons}>
              2
            </Text>
            <Text onPress={() => addNumbers(Number(3))} style={styles.Buttons}>
              3
            </Text>
            <Text onPress={() => addNumbers(Number(4))} style={styles.Buttons}>
              4
            </Text>
            <Text onPress={() => addNumbers(Number(5))} style={styles.Buttons}>
              5
            </Text>
            <Text onPress={() => addNumbers(Number(6))} style={styles.Buttons}>
              6
            </Text>
            <Text onPress={() => addNumbers(Number(7))} style={styles.Buttons}>
              7
            </Text>
            <Text onPress={() => addNumbers(Number(8))} style={styles.Buttons}>
              8
            </Text>
            <Text onPress={() => addNumbers(Number(9))} style={styles.Buttons}>
              9
            </Text>
            <Text onPress={() => addNumbers(Number(0))} style={styles.ButtonsLatest}>
              0
            </Text>
          </View>
          {numbers1 !== null && numbers2 !== null && numbers3 !== null && numbers4 !== null && numbers5 !== null ? (
            <Text onPress={() => makePaymentRequest()} style={styles.ButtonsPayment}>
              Make A Payment
            </Text>
          ) : (
            <Text style={styles.BlockButtonsPayment}> Chooce 5 numbers</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: 350,
    textAlign: "center",
    padding: 20,
    borderRadius: 10,
    margin: "auto",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 30
  },
  DisplayPannel: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    gap: 5
  },

  DiaplayBox: {
    color: "#fff",
    flex: 1,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#9936A8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    cursor: "pointer",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#9936A8"
  },
  EmpDiaplayBox: {
    color: "#fff",
    flex: 1,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#9936A8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    cursor: "pointer",
    textAlign: "center",
    borderRadius: 10
  },
  ButtonContainer: {
    paddingHorizontal: 10,

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  Buttons: {
    width: 70,
    height: 60,

    backgroundColor: "#9936A8",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    color: "#fff",
    cursor: "pointer",
    textAlign: "center"
  },
  ButtonsLatest: {
    width: "80%",
    height: 60,

    backgroundColor: "#9936A8",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    color: "#fff",
    cursor: "pointer",
    textAlign: "center"
  },
  ButtonsPayment: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#db00ff",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 23,
    color: "#fff",
    cursor: "pointer",
    textAlign: "center"
  },
  BlockButtonsPayment: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#db00ff",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 23,
    color: "#fff",
    cursor: "pointer",
    textAlign: "center",
    opacity: 0.5
  }
});
