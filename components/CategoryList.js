import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export default function CategoryList(props) {
  return (
    <TagList horizontal>
      <Tag>
        <TagText>Jean</TagText>
      </Tag>
      <Tag>
        <TagText active>Mujer</TagText>
      </Tag>
      <Tag>
        <TagText>Hombre</TagText>
      </Tag>
      <Tag>
        <TagText>Accesorios</TagText>
      </Tag>
      <Tag>
        <TagText>Accesorios</TagText>
      </Tag>
      <Tag>
        <TagText>Accesorios</TagText>
      </Tag>
      <Tag>
        <TagText>Accesorios</TagText>
      </Tag>
    </TagList>
  );
}

const TagList = styled.ScrollView``;

const Tag = styled.TouchableOpacity`
  margin: 0px 2px;
`;

const TagText = styled.Text`
  color: #222;
  font-family: ${props => (props.active ? "poppins-bold" : "poppins")};
  font-size: 15px;
`;
