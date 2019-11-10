import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing
} from "react-native";

import styled from "styled-components/native";
import { useNavigation } from "react-navigation-hooks";

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const ProductItem = ({ name, price, navigation }) => {
  return (
    <FadeInView>
      <Item onPress={() => navigation.navigate("Product")}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 10 }}
          source={{
            uri: "https://via.placeholder.com/80"
          }}
        />
        <View style={{ flexGrow: 3, marginLeft: 25 }}>
          <Head>{name}</Head>
          <Price>${price}</Price>
          <View>
            <TagList horizontal>
              <Tag>
                <TagText>Black</TagText>
              </Tag>
              <Tag>
                <TagText>Jean</TagText>
              </Tag>
              <Tag>
                <TagText>Rallado</TagText>
              </Tag>
            </TagList>
          </View>
        </View>
      </Item>
    </FadeInView>
  );
};

export default ProductItem;

const Item = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  padding: 10px 20px;
  width: 90%;
`;

const Head = styled.Text`
  font-size: 20px;
  font-family: poppins;
`;

const Price = styled.Text`
  font-size: 15px;
  font-family: poppins;
`;

const TagList = styled.ScrollView``;

const Tag = styled.TouchableOpacity`
  padding: 5px 10px;
  margin: 0px 2px;
  border-radius: 8px;
  background-color: #ff3366;
`;

const TagText = styled.Text`
  color: #fff;
  font-family: poppins;
  font-size: 10px;
`;
