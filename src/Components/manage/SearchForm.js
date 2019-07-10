import React, { useState } from "react";
import styled from "styled-components";
import useFocus from "../../Hooks/useFocus";

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
  height: 350px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const Block = styled.div`
  width: 100%;
  border: ${props => props.theme.border};
  height: 300px;
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
  padding: 10px 20px;
  font-size: 15px;
  ${props =>
    props.focus &&
    `background-color:${props.theme.blueColor};
  color:white`}
`;

export default () => {
  const { focus, onClick, value } = useFocus();

  return (
    <Container>
      <BlockContainer>
        <Block />
        <Block>
          <Title>회원분류</Title>
          <Wrapper>
            <List focus={focus} onClick={onClick}>
              유효
            </List>
            <List focus={focus} onClick={onClick}>
              만기예정
            </List>
            <List focus={focus} onClick={onClick}>
              만기
            </List>
          </Wrapper>
        </Block>
        <Block />
        <Block />
        <Block />
      </BlockContainer>
    </Container>
  );
};
