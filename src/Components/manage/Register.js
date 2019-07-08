import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  max-width: 400px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 80px 40px;
  ${props => props.theme.boxShadow}
`;
const Column = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-bottom: 25px;
  width: 100%;
  padding: 0px 30px;
  :nth-child(1) {
    display: flex;
    margin-bottom: 40px;
    flex-direction: column;
    align-items: center;
  }
  select {
    width: 100%;
    padding: 15px 20px;
    background-color: white;
    border: ${props => props.theme.blueBorder};
    font-size: 15px;
    color: ${props => props.theme.darkGreyColor};
    option {
      color: black;
    }
  }
`;

const Img = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;
`;

const Button = styled.button`
  all: unset;
  color: white;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  background-color: #2e5bff;
`;

const Info = styled.p`
  opacity: 0.8;
  margin-bottom: 40px;
`;

const Name = styled.p`
  color: black;
  margin-bottom: 15px;
  font-size: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: ${props => props.theme.blueBorder};
`;

const UserDetail = ({ name, gender, phoneNumber }) => {
  return (
    <Container>
      <Column>
        <Wrapper>
          <Img src={require("../../assets/Default.png")} />
          <Button>사진추가</Button>
        </Wrapper>
        <Wrapper>
          <Info>*표시는 필수 입력 항목입니다.</Info>
          <Name>이름(*)</Name>
          <Input
            placeholder="이름"
            value={name.value}
            onChange={name.onChange}
          />
        </Wrapper>
        <Wrapper>
          <Name>성별(*)</Name>
          <select id="gender-select">
            <option value="">--성별을 선택해주세요--</option>
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
        </Wrapper>
        <Wrapper>
          <Name>핸드폰번호(*)</Name>
          <Input
            placeholder="핸드폰번호"
            value={phoneNumber.value}
            onChange={phoneNumber.onChange}
          />
        </Wrapper>
        <Wrapper>
          <Name>회원권</Name>
          <select id="gender-select">
            <option value="">--회원권을 선택해주세요--</option>
            <option value="male">1개월</option>
            <option value="female">3개월</option>
            <option value="female">6개월</option>
            <option value="female">12개월</option>
          </select>
        </Wrapper>
        <Button>등록하기</Button>
      </Column>
    </Container>
  );
};

export default UserDetail;
