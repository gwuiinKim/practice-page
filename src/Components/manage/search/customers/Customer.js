import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const List = styled.li`
  all: unset;
  cursor: pointer;
  user-select: none;
  padding: 10px 20px;
  font-size: 15px;
  margin-bottom: 1px;
  ${props =>
    props.current &&
    `background-color:${props.theme.blueColor};
color:white`}
`;

export default ({
  customerCategoryList,
  filter,
  onFilterClick,
  expireSelect
}) => {
  return (
    <Container>
      <ListWrapper>
        {customerCategoryList.map(el => (
          <List onClick={onFilterClick} current={filter.includes(el)} key={el}>
            {el}
          </List>
        ))}
      </ListWrapper>
      <Input expireSelect={expireSelect} />
    </Container>
  );
};
