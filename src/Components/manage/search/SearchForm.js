import React from "react";
import styled from "styled-components";
import Filtered from "./Filtered";
import AgeGender from "./AgeGender";
import { useFilter, useFilterFns } from "../../../Context/UserContext";
import SearchByKey from "./SearchByKey";

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
  const { filter, list1 } = useFilter();
  const {
    onFilterClick,
    handleDeleteFilter,
    handleResetFilter
  } = useFilterFns();

  return (
    <Container>
      <BlockContainer>
        <BlockWrapper>
          <Block>
            <Title> - 성별·연령</Title>
            <AgeGender />
          </Block>
          <Block>
            <Title> - 회원분류</Title>
            <Wrapper>
              {list1.map(el => (
                <List onClick={onFilterClick} current={filter.includes(el)}>
                  {el}
                </List>
              ))}
            </Wrapper>
          </Block>
          <Block />
          <Block />
          <Block />
        </BlockWrapper>
        <SearchByKey />
      </BlockContainer>
      <Filtered
        filter={filter}
        handleDeleteFilter={handleDeleteFilter}
        handleResetFilter={handleResetFilter}
      />
    </Container>
  );
};
