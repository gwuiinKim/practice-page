import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  margin-top: 20px;
`;

const numberArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30
];

const options = [];

const generator = () => {
  numberArray.map(number =>
    options.push({ value: `${number}일`, label: `${number}일` })
  );
};
generator();

export default ({ expireSelect }) => {
  return (
    <Container>
      <Select
        theme={theme => ({
          ...theme,
          borderRadius: 3
        })}
        placeholder="만기예정일 선택"
        value={expireSelect.value}
        onChange={expireSelect.onChange}
        options={options}
      />
    </Container>
  );
};
