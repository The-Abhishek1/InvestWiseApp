import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

//Main Function
export default function WelcomePage() {
  const navigation = useNavigation();
  const Signup = () => {
    navigation.navigate("Signup");
  };
  const Login = () => {
    navigation.navigate("Login");
  };
  {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#d6fbff" barStyle="dark-content" />

        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Image
              source={require("../Images/frontimg.png")}
              style={{
                width: Dimensions.get("screen").width * 0.9,
                height: Dimensions.get("screen").height * 0.4,
              }}
            />
            <View style={styles.welcome}>
              <Text style={{ fontWeight: "bold", fontSize: 35 }}>Welcome</Text>
              <Text
                style={{ color: "gray", fontSize: 16, textAlign: "center" }}
              >
                Create an account and access our awesome services
              </Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <TouchableOpacity
              onPress={Signup}
              style={{
                backgroundColor: "#0269b8",
                padding: 15,
                width: Dimensions.get("screen").width * 0.7,
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "gray" }}>
                Already have an Account?
              </Text>
              <TouchableOpacity onPress={Login}>
                <Text
                  style={{ color: "green", fontSize: 16, fontWeight: "bold" }}
                >
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    padding: 20,
    backgroundColor: "aliceblue",
    height: Dimensions.get("screen").height * 1,
  },
  welcome: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
});
