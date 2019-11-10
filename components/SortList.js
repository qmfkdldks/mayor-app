import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CategoryList(props) {
  return (
    <SortList horizontal>
      <MaterialIcons name="sort" size={26} />
      <Sort>
        <SortText> Más Nuevos</SortText>
      </Sort>
      <Sort>
        <SortText>Baratos</SortText>
      </Sort>
    </SortList>
  );
}

const SortList = styled.ScrollView``;

const Sort = styled.TouchableOpacity`
  margin: 0px 2px;
  flex-direction: row;
`;

const SortText = styled.Text`
  color: #222;
  font-family: ${props => (props.active ? "poppins-bold" : "poppins")};
  font-size: 15px;
`;
