import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthNavigator from "./AuthNavigator";

const switchNavigator = createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthNavigator,
    Main: MainTabNavigator
  },
  {
    initialRouteName: "Main"
  }
);

switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
