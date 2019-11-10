import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";

import styled from "styled-components/native";

import CateogryList from "../components/CategoryList";
import SortList from "../components/SortList";
import ProductItem from "../components/ProductItem";

const generate_products = times => {
  return Array(times)
    .fill()
    .map(() => ({
      name: "Jean",
      price: 100
    }));
};

const render_products = products => {
  return products.map((props, index) => <ProductItem key={index} {...props} />);
};

export default function HomeScreen() {
  const [query, setQuery] = useState("");

  return (
    <Wrapper>
      <List>
        <BackgroundImage
          source={require("../assets/images/credit_cards.jpg")}
        />
        <Title>Cada vez más Grande</Title>
        <Container>
          <CateogryList />
        </Container>
        <SearchInput
          onChangeText={query => setQuery(query)}
          value={query}
          placeholder="Search..."
        />
        <Container>
          <SortList />
        </Container>
        {render_products(generate_products(10))}
      </List>
    </Wrapper>
  );
}

HomeScreen.navigationOptions = {
  title: "Descubrí en el Mayor"
};

const Wrapper = styled.View`
  background-color: #fff;
`;

const Container = styled.View`
  width: 80%;
  margin: 10px auto;
`;

const Title = styled.Text`
  font-size: 30px;
  font-family: poppins-bold;
  width: 80%;
  margin: 0 auto;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  max-height: 50%;
  resize-mode: contain;
`;

const List = styled.ScrollView`
  width: 100%;
`;

const SearchInput = styled.TextInput`
  width: 80%;
  height: 50px;
  margin: 0 auto;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #464646;
`;
