import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";

import AuthScreen from "../screens/AuthScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  config
);

AuthStack.navigationOptions = {};

AuthStack.path = "";

export default AuthStack;
