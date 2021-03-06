import React, { useEffect } from "react";
import styled from "styled-components";
import Filtered from "./Filtered";
import AgeGender from "./ageGender/AgeGender";
import { useFilter, useFilterFns } from "../../../Context/UserContext";
import SearchByKey from "./SearchByKey";
import Membership from "./membership/Membership";

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

export default () => {
  const {
    data,
    search,
    expireSelect,
    filter,
    customerCategoryList,
    genderList
  } = useFilter();
  const {
    handleMembershipClick,
    handleDeleteFilter,
    handleResetFilter,
    handleGenderClick,
    dataHandler,
    handleAddKeyword,
    handleEnterKeyword
  } = useFilterFns();

  useEffect(() => {
    dataHandler(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <Container>
      <BlockContainer>
        <BlockWrapper>
          <Block>
            <Title> - 성별·연령</Title>
            <AgeGender
              filter={filter}
              genderList={genderList}
              handleGenderClick={handleGenderClick}
            />
          </Block>
          <Block>
            <Title> - 회원권 분류</Title>
            <Membership
              filter={filter}
              customerCategoryList={customerCategoryList}
              handleMembershipClick={handleMembershipClick}
              expireSelect={expireSelect}
            />
          </Block>
          <Block>
            <Title> - 레슨 분류</Title>
          </Block>
          <Block />
          <Block />
        </BlockWrapper>
        <SearchByKey
          search={search}
          handleAddKeyword={handleAddKeyword}
          handleEnterKeyword={handleEnterKeyword}
        />
      </BlockContainer>
      <Filtered
        data={data}
        filter={filter}
        handleDeleteFilter={handleDeleteFilter}
        handleResetFilter={handleResetFilter}
      />
    </Container>
  );
};
