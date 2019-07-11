import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 15px 25px;
`;

const Column = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #bcbcbc;
  cursor: pointer;
`;

const Content = styled.span``;

const CheckBox = styled.input`
  display: none;
`;

const Box = styled.div``;

export default () => {
  return (
    <Container>
      <Column>
        <Label for="male" />
        <CheckBox id="male" type="checkBox" />
        <Content>남</Content>

        <Label for="female">
          <CheckBox id="female" type="checkBox" />
          <Content>여</Content>
        </Label>
      </Column>
      <Column />
      <Column />
    </Container>
  );
};
