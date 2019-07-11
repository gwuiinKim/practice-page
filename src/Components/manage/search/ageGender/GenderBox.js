import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const CheckBox = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  border: 2px solid
    ${props => (props.current ? "white" : props.theme.blueColor)};
  margin-right: 5px;
  background-color: ${props =>
    props.current ? props.theme.blueColor : "inherit"};
`;
const Content = styled.span``;

export default ({ filter, genderList, handleGenderClick }) => (
  <Container>
    {genderList.map(el => (
      <CheckBoxContainer key={el}>
        <CheckBox
          onClick={handleGenderClick}
          data-value={el}
          current={filter.includes(el)}
        />
        <Content>{el}</Content>
      </CheckBoxContainer>
    ))}
  </Container>
);
