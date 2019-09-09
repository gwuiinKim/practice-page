import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { genderOptions, membeshipOptions } from "../selectBoxList";

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
  /* select {
    width: 100%;
    padding: 15px 20px;
    background-color: white;
    border: ${props => props.theme.blueBorder};
    font-size: 15px;
    color: ${props => props.theme.darkGreyColor};
    option {
      color: black;
    }
  } */
`;

const Img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  all: unset;
  color: white;
  cursor: pointer;
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
  /* border: ${props => props.theme.blueBorder}; */
  border: 1px solid #3897F0;
  border-radius:4px;
`;

const UserDetail = ({
  name,
  gender,
  membership,
  phoneNumber,
  isEdit,
  userDetail
}) => {
  const { url: aUrl } = userDetail[0];

  // 할일
  // input required 자바스크립트코드
  // button 제출 event handler
  // 사진 찍기

  const selectStyle = {
    control: (base, state) => ({
      ...base,
      "&:hover": { borderColor: "#3897F0" }, // border style on hover
      border: "1px solid #3897F0", // default border color
      boxShadow: "none", // no box-shadow,
      padding: "5px 10px",
      fontSize: "14px"
    })
  };

  return (
    <Container>
      <Column>
        <Wrapper>
          <Img src={isEdit ? aUrl : require("../../assets/Default.png")} />
          <Button>{isEdit ? "사진변경" : "사진추가"}</Button>
        </Wrapper>
        <Wrapper>
          <Info>*표시는 필수 입력 항목입니다.</Info>
          <Name>이름(*)</Name>
          <Input
            placeholder="이름"
            value={name.value}
            onChange={name.onChange}
            required
          />
        </Wrapper>
        <Wrapper>
          <Name>성별(*)</Name>
          <Select
            placeholder="성별 선택"
            value={gender.value}
            onChange={gender.onChange}
            options={genderOptions}
            styles={selectStyle}
          />
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
          <Select
            placeholder="회원권 선택"
            value={membership.value}
            onChange={membership.onChange}
            options={membeshipOptions}
            styles={selectStyle}
          />
        </Wrapper>
        <Button>등록하기</Button>
      </Column>
    </Container>
  );
};

export default UserDetail;
