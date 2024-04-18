import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  PermissionsAndroid,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
  Fontisto,
  EvilIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

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
    <ScrollView>
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
                  <Feather name="camera" size={18} color="white" />
                </Pressable>
              </View>
            </View>
            <View style={styles.demat}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 30,
                }}
              >
                <AntDesign name="Safety" size={20} color="black" />
                <View style={styles.insideDemat}>
                  <Text style={styles.dematText}>Demat Account Number</Text>
                  <View style={styles.dematNoIcon}>
                    <Text style={styles.dematNo}>1203 3201 8047 0567</Text>
                    <MaterialIcons
                      name="content-copy"
                      size={20}
                      color="#3f77e8"
                    />
                  </View>
                </View>
              </View>
              <Feather name="edit-3" size={18} color="gray" />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 20,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                backgroundColor: "white",
              }}
            >
              <Text style={{ fontSize: 18 }}>Personal Details</Text>
              <View
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <View style={styles.details}>
                  <View style={styles.iconName}>
                    <Ionicons name="call-outline" size={20} color="black" />
                    <View style={styles.insideDetails}>
                      <Text style={styles.dematText}>Mobile Number</Text>
                      <Text style={styles.dematNo}>+916366652685</Text>
                    </View>
                  </View>
                  <Feather name="edit-3" size={20} color="gray" />
                </View>
                <View style={styles.details}>
                  <View style={styles.iconName}>
                    <Fontisto name="email" size={20} color="black" />
                    <View style={styles.insideDetails}>
                      <Text style={styles.dematText}>Email</Text>
                      <Text style={styles.dematNo}>idiot63666@gamil.com</Text>
                    </View>
                  </View>
                  <Feather name="edit-3" size={18} color="gray" />
                </View>
                <View style={styles.details}>
                  <View style={styles.iconName}>
                    <MaterialCommunityIcons
                      name="card-account-details-outline"
                      size={20}
                      color="black"
                    />
                    <View style={styles.insideDetails}>
                      <Text
                        style={{ textTransform: "uppercase", color: "gray" }}
                      >
                        Pan Number
                      </Text>
                      <Text
                        style={{ textTransform: "uppercase", fontSize: 17 }}
                      >
                        EVjpa6704b
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.details}>
                  <View style={styles.iconName}>
                    <EvilIcons
                      name="location"
                      size={25}
                      color="black"
                      style={{ marginLeft: -5 }}
                    />
                    <View style={styles.insideDetails}>
                      <Text style={styles.dematText}>Location</Text>
                      <Text
                        style={{
                          fontSize: 17,
                          textTransform: "uppercase",
                          lineHeight: 25,
                        }}
                      >
                        Maralawadi Hobali Attiluppe ramanagara karnataka
                        bengaluru karnataka india
                      </Text>
                    </View>
                  </View>
                  <Feather name="edit-3" size={18} color="gray" />
                </View>
                <View style={styles.details}>
                  <View style={styles.iconName}>
                    <AntDesign name="copy1" size={20} color="black" />
                    <View style={styles.insideDetails}>
                      <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                        View All Categories
                      </Text>
                      <Text style={{ fontSize: 15, color: "gray" }}>
                        view Nominee details,Activate DDPI,MTF,Request DIS Book
                      </Text>
                    </View>
                  </View>
                  <Entypo name="chevron-small-right" size={25} color="gray" />
                </View>
              </View>
            </View>
            <View>
              <Text>Bank Details</Text>
              <View>
                <View>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      width: 70,
                      alignItems: "center",
                      justifyContent: "center",
                      paddingHorizontal: 20,
                      borderColor: "gray",
                      paddingVertical: 5,
                    }}
                  >
                    <Image
                      style={{ height: 40, width: 40 }}
                      source={require("../Images/promotion.png")}
                      alt=""
                    />
                  </View>
                  <View>
                    <View>
                      <Text>Canara Bank</Text>
                      <Text>0431320000009</Text>
                    </View>
                    <Text>Primary</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  insideDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: Dimensions.get("screen").width * 0.6,
  },
  iconName: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  dematNo: {
    fontSize: 17,
  },
  dematText: {
    color: "gray",
    fontSize: 16,
  },
  dematNoIcon: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  insideDemat: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  demat: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
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
    paddingBottom: 40,
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
