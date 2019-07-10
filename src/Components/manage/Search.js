import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  border-top: 0.5px solid #a9a9a9;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;
const Input = styled.input`
  width: 100%;
`;

export default () => (
  <Container>
    <Column>키워드</Column>
    <Column>
      <Input />
    </Column>
  </Container>
);
