import React, { useState, useRef } from "react";
import styled from "styled-components";
import Search from "./Search";
import Filtered from "./Filtered";

const Container = styled.div`
  width: 1250px;
  height: 675px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  background-color: white;
  padding: 90px 40px 0px;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
`;

const BlockContainer = styled.div`
  width: 100%;
  height: 360px;
  border: 0.5px solid #a9a9a9;
  margin-bottom: 12px;
`;

const BlockWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Block = styled.div`
  width: 100%;
  height: 300px;
  :not(:last-child) {
    border-right: 0.5px solid #a9a9a9;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  border-bottom: ${props => props.theme.border};
  padding: 10px 15px;
`;

const Wrapper = styled.ul`
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

export default () => {
  const [filter, setFilter] = useState([]);

  const onClick = e => {
    const {
      target: { innerText }
    } = e;
    if (filter.includes(innerText)) {
      const filtered = filter.filter(el => el !== innerText);
      setFilter(filtered);
    } else {
      setFilter([...filter, innerText]);
    }
  };
  const list = ["유효", "만기예정", "만기"];

  console.log(filter);
  return (
    <Container>
      <BlockContainer>
        <BlockWrapper>
          <Block />
          <Block>
            <Title> - 회원분류</Title>
            <Wrapper>
              {list.map(el => (
                <List onClick={onClick} current={filter.includes(el)}>
                  {el}
                </List>
              ))}
            </Wrapper>
          </Block>
          <Block />
          <Block />
          <Block />
        </BlockWrapper>
        <Search />
      </BlockContainer>
      <Filtered filter={filter} />
    </Container>
  );
};
