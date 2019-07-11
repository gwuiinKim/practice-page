import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
`;

const Element = styled.div`
  border: 2px solid #e0e0e0;
  margin: 0.5px;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
`;

export default () => (
  <Container>
    <Element>20세 이하</Element>
    <Element>21-30</Element>
    <Element>31-40</Element>
    <Element>41-50</Element>
    <Element>50-60</Element>
    <Element>60세 이상</Element>
  </Container>
);
