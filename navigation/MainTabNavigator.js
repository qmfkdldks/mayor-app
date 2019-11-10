import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProductScreen from "../screens/ProductScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Product: ProductScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: "#222",
    inactiveTintColor: "#222"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `home` : "home"}
    />
  )
};

HomeStack.path = "";

const FavoriteStack = createStackNavigator(
  {
    Favorite: FavoriteScreen
  },
  config
);

FavoriteStack.navigationOptions = {
  tabBarLabel: "Favorite",
  tabBarOptions: {
    activeTintColor: "#222",
    inactiveTintColor: "#222"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "heart" : "heart"}
    />
  )
};

FavoriteStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  FavoriteStack
});

tabNavigator.path = "";

export default tabNavigator;
