import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  PermissionsAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";

//Main Functon
export default function AccountInfo() {
  //Navigation Variable
  const navigation = useNavigation();
  //Function to ProfilePhoto
  const imgChange = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "InvestWise App Camera Permission",
          message:
            "InvestWise App needs access to your camera " +
            "so you can change profile picture.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const readImages = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS_READ_MEDIA_IMAGES,
        {
          title: "InvestWise App Camera Permission",
          message:
            "InvestWise App needs access to your files " +
            "so you can change profile picture.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can choose the files");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Pressable
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Ionicons name="arrow-back-outline" size={27} color="black" />
          </Pressable>

          <Text style={styles.topText}>Profile</Text>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.infoContainer}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Abhishek N</Text>
              <View style={styles.client}>
                <Text style={styles.clientID}>Client ID - </Text>
                <Text style={styles.clientID}>A52393970</Text>
              </View>
            </View>
            <View style={styles.topInfo}>
              <Pressable
                onPress={readImages}
                style={{
                  borderWidth: 1.5,
                  borderRadius: 100,
                  borderColor: "gray",
                  padding: 2,
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../Images/Screenshot_20230606_151222.jpg")}
                />
              </Pressable>
              <Pressable style={styles.camera} onPress={imgChange}>
                <Feather name="camera" size={20} color="white" />
              </Pressable>
            </View>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("screen").height * 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
    paddingTop: 20,
    backgroundColor: "aliceblue",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  topText: {
    fontSize: 20,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    position: "relative",
    top: 50,
  },
  topInfo: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: -50,
    justifyContent: "center",
    width: Dimensions.get("screen").width * 0.3,
    zIndex: 1,
  },
  image: {
    borderRadius: 100,
    height: 90,
    width: 90,
  },
  camera: {
    display: "flex",
    backgroundColor: "#4287f5",
    alignItems: "center",
    borderRadius: 100,
    padding: 3,
    width: 30,
    position: "absolute",
    bottom: 2,
    right: 15,
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: Dimensions.get("screen").width * 1,
    paddingVertical: 20,
    paddingTop: 70,
  },
  userName: {
    fontWeight: "600",
    fontSize: 20,
    textTransform: "uppercase",
  },
  client: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  clientID: {
    fontSize: 16,
    textTransform: "uppercase",
  },
});
