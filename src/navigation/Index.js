import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo, FontAwesome5, Feather } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Popular from "../screens/Popular";
import Details from "../screens/Details";
import Account from "../screens/Account";
import Download from "../screens/Download";
import Bookmark from "../screens/Bookmark";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#D71617",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={27} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={Popular}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hotjar" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Index() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            statusBarTranslucent: true,
            statusBarStyle: "light",
            headerTransparent: true,
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="My Tabs"
            component={MyTabs}
            options={{
              headerBackVisible: false,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerTintColor: "#eee",
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="Bookmark"
            component={Bookmark}
            options={{
              headerTintColor: "#eee",
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerTintColor: "#eee",
            }}
          />
          <Stack.Screen
            name="Download"
            component={Download}
            options={{
              headerTintColor: "#eee",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
