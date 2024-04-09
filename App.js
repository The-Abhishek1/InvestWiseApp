import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./App/Screens/Home";
import WatchList from "./App/Screens/WatchList";
import Portfolio from "./App/Screens/Portfolio";
import Orders from "./App/Screens/Orders";
import Profile from "./App/Screens/Profile";
import Signup from "./App/Screens/Signup";
import Login from "./App/Screens/Login";
import Chat from "./App/Screens/Chat";
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import WatchListTabBar from "./App/Screens/WatchListTabBar";
import WelcomePage from "./App/Screens/WelcomePage";

function TabNavigator() {
  return (
    <Tab.Navigator
      inactiveColor="#91daff"
      activeColor="#00aaff"
      barStyle={{ backgroundColor: "white" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeScreen") {
            return <FontAwesome name="home" size={24} color={color} />;
          } else if (route.name === "WatchList") {
            return (
              <MaterialCommunityIcons
                name="folder-star-outline"
                size={24}
                color={color}
              />
            );
          } else if (route.name === "Portfolio") {
            return <AntDesign name="folderopen" size={24} color={color} />;
          } else if (route.name === "Orders") {
            return (
              <Foundation name="clipboard-notes" size={24} color={color} />
            );
          } else if (route.name === "Profile") {
            return (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={24}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          title: "Home",
        }}
        component={Home}
      />
      <Tab.Screen
        name="WatchList"
        options={{
          title: "Watchlist",
        }}
        component={WatchListTabBar}
      />

      <Tab.Screen
        name="Portfolio"
        options={{ title: "Portfolio" }}
        component={Portfolio}
      />
      <Tab.Screen
        name="Orders"
        options={{ title: "Orders", tabBarBadge: 3 }}
        component={Orders}
      />

      <Tab.Screen
        name="Profile"
        options={{ title: "Profile" }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
