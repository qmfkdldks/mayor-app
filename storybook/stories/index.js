import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import styled from "styled-components/native";

// eslint-disable-next-line import/extensions
import Button from "./Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";
import ProductItem from "../../components/ProductItem/component";

import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

const productData = {
  name: "Jean",
  price: 1020
};


const DeleteButton = styled(RectButton)`
  flex-direction: column;
  justify-content: center;
`;

const DeleteText = styled.Text`
  font-size: 15px;
  font-family: poppins-bold;
`;

const renderLeftActions = () => {
  return (
    <DeleteButton onPress={() => alert("from")}>
      <DeleteText>Remover</DeleteText>
    </DeleteButton>
  );
};

storiesOf("ProductItem", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("default", () => <ProductItem {...productData} />)
  .add("swipeable", () => {
    return (
      <Swipeable renderLeftActions={renderLeftActions}>
        <ProductItem {...productData} />
      </Swipeable>
    );
  });

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
