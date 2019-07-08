import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 280px;
  width: 100%;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 20px 40px;
  ${props => props.theme.boxShadow}
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Filter = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #e0e6f7;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px 0px;
`;

export default () => (
  <Container>
    <Title>Filter</Title>
    <Filter />
    <Filter />
    <Filter />
    <Filter />
  </Container>
);
