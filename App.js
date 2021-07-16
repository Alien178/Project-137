import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default function App() {
  return <AppContainer />;
}

const AppStackNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
    Details: {
      screen: DetailScreen,
      navigationOptions: { headerShown: false },
    },
  },
  { initialRouteName: "Home" }
);

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
