import React from "react";
import styled from "styled-components";
import GenderBox from "./GenderBox";
import AgeBox from "./AgeBox";
import Range from "./material-Range";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 15px 25px;
`;

export default ({ filter, handleGenderClick, genderList }) => {
  return (
    <Container>
      <GenderBox
        filter={filter}
        genderList={genderList}
        handleGenderClick={handleGenderClick}
      />
      <AgeBox />
      <Range />
    </Container>
  );
};
