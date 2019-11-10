import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Animated,
  StyleSheet,
  Button
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import ProductItem from "../components/ProductItem";

const generate_products = times => {
  return Array(times)
    .fill()
    .map(() => ({
      name: "Jean",
      price: 100
    }));
};

export default class FavoriteScreen extends React.Component {
  renderLeftActions = (progress, dragX) => {
    return (
      <DeleteButton onPress={() => alert("from")}>
        <DeleteText>Remover</DeleteText>
      </DeleteButton>
    );
  };

  render() {
    const products = generate_products(10).map((props, index) => (
      <Swipeable key={index} renderLeftActions={this.renderLeftActions}>
        <ProductItem {...props} />
      </Swipeable>
    ));

    const markers = [
      {
        latlng: {
          latitude: 37.78825,
          longitude: -122.4324
        },
        title: "This title",
        description: "soe des"
      },
      {
        latlng: {
          latitude: 37.78125,
          longitude: -122.4324
        },
        title: "This title",
        description: "soe des"
      },
      {
        latlng: {
          latitude: 37.78865,
          longitude: -122.4344
        },
        title: "This title",
        description: "soe des"
      }
    ];

    return (
      <Wrapper>
        <List>
          <Map
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </Map>

          <Title>Productos Marcados</Title>
          <LottieView
            style={{
              width: 100,
              height: 100,
              alignSelf: "center"
            }}
            resizeMode="cover"
            source={require("../assets/lottie/heart.json")}
            autoPlay
            loop
          />
          {products}
        </List>
      </Wrapper>
    );
  }
}

FavoriteScreen.navigationOptions = {
  title: "Tus Favoritos"
};

const Wrapper = styled.View`
  background-color: #fff;
`;

const Container = styled.View`
  width: 80%;
  margin: 0 auto;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 200px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-family: poppins-bold;
  width: 80%;
  margin: 15px auto;
`;

const DeleteButton = styled(RectButton)`
  flex-direction: column;
  justify-content: center;
`;

const DeleteText = styled.Text`
  font-size: 15px;
  font-family: poppins-bold;
`;

const List = styled.ScrollView`
  width: 100%;
`;
