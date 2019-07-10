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
`;

export default ({ filter, handleDelete }) => {
  return (
    <Container>
      <Element>전체 2000건</Element>
      <ItemWrapper>
        {filter.map(el => (
          <Item>
            {el}
            <Button data-value={el} onClick={handleDelete}>
              x
            </Button>
          </Item>
        ))}
      </ItemWrapper>
    </Container>
  );
};
