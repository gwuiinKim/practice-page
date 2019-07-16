import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  max-width: 400px;
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 80px 40px;
  ${props => props.theme.boxShadow}
`;
const Column = styled.div`
  width: 100%;
  height: auto;
  :nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  :nth-child(2) {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 0.5px solid rgb(224, 224, 224);
  }
`;

const Img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const Name = styled.span`
  font-size: 20px;
  margin-bottom: 25px;
`;

const Button = styled.button`
  all: unset;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  background-color: #2e5bff;
`;

const CategoryWrapper = styled.div`
  margin-bottom: 40px;
`;

const Cateogry = styled.p`
  color: ${props => props.theme.darkGreyColor};
  font-size: 18px;
`;

const Content = styled.p`
  margin-top: 15px;
  color: black;
  opacity: 1;
  font-size: 18px;
`;

const UserDetail = ({ userDetail, handleModifyClick }) => {
  const {
    id,
    name,
    gender,
    url,
    isPt,
    remains,
    phoneNumber,
    membership
  } = userDetail[0];

  return (
    <Container>
      <Column>
        <Img src={url} />
        <Name>{name}</Name>
        <Button onClick={handleModifyClick}>수정하기</Button>
      </Column>
      <Column>
        <CategoryWrapper>
          <Cateogry>회원권</Cateogry>
          <Content>{membership}</Content>
        </CategoryWrapper>
        <CategoryWrapper>
          <Cateogry>잔여일수</Cateogry>
          <Content>{remains}일</Content>
        </CategoryWrapper>
        <CategoryWrapper>
          <Cateogry>휴대폰 번호</Cateogry>
          <Content>{phoneNumber}</Content>
        </CategoryWrapper>
        <CategoryWrapper>
          <Cateogry>성별</Cateogry>
          <Content>{gender}</Content>
        </CategoryWrapper>
      </Column>
    </Container>
  );
};

export default UserDetail;
