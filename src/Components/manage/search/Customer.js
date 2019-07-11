import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;

const List = styled.li`
  all: unset;
  cursor: pointer;
  user-select: none;
  padding: 10px 20px;
  font-size: 15px;
  ${props =>
    props.current &&
    `background-color:${props.theme.blueColor};
color:white`}
`;

export default ({ list1, filter, onFilterClick }) => (
  <Container>
    {list1.map(el => (
      <List onClick={onFilterClick} current={filter.includes(el)} key={el}>
        {el}
      </List>
    ))}
  </Container>
);
