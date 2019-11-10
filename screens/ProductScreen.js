import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from "react-native";
import MapView from "react-native-maps";

import styled from "styled-components/native";
import Carousel from "react-native-snap-carousel";

export default class ProductScreen extends React.Component {
  renderImage = ({ item, index }) => {
    return (
      <View>
        <ProductImage
          source={{
            uri: item.uri
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <Wrapper>
        <List>
          <CarouselWrapper>
            <Carousel
              data={[
                {
                  title: "Some title",
                  uri:
                    "https://media.istockphoto.com/photos/fashionable-woman-in-pink-dress-on-pink-background-picture-id917325078?k=6&m=917325078&s=612x612&w=0&h=67ygzHChYBPHXW7XnLXFc6_FDGQlaay2R4CNFFA9BQ8="
                },
                {
                  title: "Popup",
                  uri:
                    "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                  title: "Third",
                  uri:
                    "https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1567797440496-PDWYUWTB4WZYYVM0JGS4/ke17ZwdGBToddI8pDm48kPjjuPFa0G8ug6tTgAyzZM97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0r9YoV8ytu8SWDj21Bt3yU95gDueuvxTE97yqKtmyLaG0xMWyUiQHfzKXGxgPgNvsw/Affordable+Fair+Trade+Clothing+-+People+Tree"
                }
              ]}
              renderItem={this.renderImage}
              sliderWidth={360}
              itemWidth={256}
              layout={"default"}
            />
          </CarouselWrapper>
          <Title>Jumpeaaraa Amaraillo</Title>
          <TagList horizontal>
            <Tag>
              <TagText>Jean</TagText>
            </Tag>
            <Tag>
              <TagText>Blanco</TagText>
            </Tag>
          </TagList>
          <Container>
            <Head>ASK DENIM</Head>
            <Price>$ 152,20</Price>
          </Container>
          <Map
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </List>
      </Wrapper>
    );
  }
}

ProductScreen.navigationOptions = {
  title: "Product title"
};

const Wrapper = styled.View`
  background-color: #fff;
`;

const CarouselWrapper = styled.View`
  width: 80%;
  margin: 15px 10px;
`;

const Container = styled.View`
  width: 80%;
  margin: 0 auto;
`;

const Map = styled(MapView)`
  margin-top: 30px;
  width: 100%;
  height: 200px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-family: poppins-bold;
  width: 80%;
  margin: 0 auto;
`;

const ProductImage = styled.Image`
  width: 200px;
  height: 300px;
  resize-mode: cover;
  border-radius: 10px;
`;

const Head = styled.Text`
  font-size: 20px;
  font-family: poppins;
`;

const Price = styled.Text`
  font-size: 30px;
  font-family: poppins;
  text-align: right;
`;

const TagList = styled.ScrollView`
  width: 80%;
  margin: 0 auto;
`;

const Tag = styled.TouchableOpacity`
  margin: 0px 2px;
`;

const TagText = styled.Text`
  color: #ff3366;
  font-family: poppins;
  font-size: 15px;
`;

const List = styled.ScrollView`
  width: 100%;
`;
