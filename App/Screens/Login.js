import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  Pressable,
  Alert,
  TextInput,
  StyleSheet,
  StatusBar,
  ToastAndroid,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../SupaBase/SupabaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  //Navaigation
  const navigation = useNavigation();
  const homeScreen = async () => {
    navigation.navigate("Home");
    ToastAndroid.show(
      "Login Successful!!",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="aliceblue" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: "aliceblue",
          height: "100%",
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 25,
            marginTop: 200,
          }}
        >
          Welcome Back,
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 40,
            gap: 30,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 15,
            }}
          >
            <TextInput style={styles.inputs} placeholder="Email"></TextInput>
            <TextInput style={styles.inputs} placeholder="Password"></TextInput>
          </View>
          <TouchableOpacity
            onPress={homeScreen}
            style={{
              width: Dimensions.get("screen").width * 0.7,
              backgroundColor: "#0269b8",
              borderRadius: 30,
              padding: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 20,
                color: "white",
              }}
            >
              SignIn
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>OR</Text>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: Dimensions.get("screen").width * 0.7,
              borderRadius: 100,
              paddingBottom: 10,
              paddingTop: 10,
              paddingRight: 19,
            }}
            onPress={homeScreen}
          >
            <Image
              source={require("../Images/google.png")}
              style={{ width: 32, height: 32 }}
            />
            <Text style={{ fontSize: 16 }}>SignIn with Google</Text>
          </TouchableOpacity>

          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: 15, color: "gray" }}>
              Don't have an Account?{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{ color: "green", fontWeight: "bold", fontSize: 15 }}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "white",
    padding: 10,
    width: Dimensions.get("screen").width * 0.7,
    borderRadius: 330,
    fontSize: 17,
    paddingLeft: 30,
  },
});
