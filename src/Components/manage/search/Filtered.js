import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 125px;
  background-color: #e0e6f7;
  color: black;
  border-radius: 5px;
  display: grid;
  padding: 20px 30px;
  grid-template-columns: 1fr 5fr;
  position: relative;
`;

const Element = styled.div``;
const ItemWrapper = styled.ul`
  font-size: 12px;
  :not(:last-child) {
    margin-right: 10px;
  }
  display: flex;
`;

const Item = styled.li`
  margin-right: 20px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  margin-left: 5px;
  font-size: 14px;
  vertical-align: center;
`;

const Reset = styled.button`
  all: unset;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background-color: #2e5bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`;

export default ({ data, filter, handleDeleteFilter, handleResetFilter }) => {
  return (
    <Container>
      <Element>전체 {data.length}건</Element>
      <ItemWrapper>
        {filter.map(el => (
          <Item key={el}>
            {el}
            <Button data-value={el} onClick={handleDeleteFilter}>
              x
            </Button>
          </Item>
        ))}
      </ItemWrapper>
      <Reset onClick={handleResetFilter}>초기화</Reset>
    </Container>
  );
};
