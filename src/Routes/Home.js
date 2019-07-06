import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default () => {
  return (
    <>
      <Sidebar />
      <Container />
    </>
  );
};
