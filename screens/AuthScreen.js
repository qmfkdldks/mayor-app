import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import * as Google from "expo-google-app-auth";

import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const GoogleButton = ({ onPress }) => (
  <FontAwesome.Button
    onPress={onPress}
    name="google"
    backgroundColor="#fff"
    color="#222"
    size={25}
    iconStyle={{ color: "#F4511E" }}
  >
    Login with Facebook
  </FontAwesome.Button>
);

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId:
        "455695152686-g04p04u3tigpoi052h1uo4jvhpjsp0oe.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export default function AuthScreen({navigation}) {
  return (
    <Wrapper>
      <Splash source={require("../assets/images/splash.png")} />
      <Head>Hi, This is Mayor</Head>
      <GoogleButton onPress={() => navigation.navigate("Main")} />
    </Wrapper>
  );
}

AuthScreen.navigationOptions = {
  header: null
};

const Head = styled.Text`
  font-size: 24px;
  font-family: poppins;
`;

const Splash = styled.Image`
  width: 378px;
  resize-mode: contain;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
