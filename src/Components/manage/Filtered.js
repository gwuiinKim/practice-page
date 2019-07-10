import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 125px;
  background-color: #e0e6f7;
  color: black;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

const Element = styled.div`
  padding: 10px;
  display: flex;
`;
const ItemWrapper = styled.div`
  font-size: 12px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

const Item = styled.span`
  margin-right: 5px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

export default ({ filter }) => (
  <Container>
    <Element>전체 2000건</Element>
    <Element>
      {filter.map(el => (
        <ItemWrapper>
          <Item>{el}</Item>
          <Button>x</Button>
        </ItemWrapper>
      ))}
    </Element>
  </Container>
);
