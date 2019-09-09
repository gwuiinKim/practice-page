import React from "react";
import styled from "styled-components";
import MyApp from "../Components/BDND/MyApp";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-left: 160px;
`;

export default () => {
  return (
    <Container>
      <MyApp />
    </Container>
  );
};
