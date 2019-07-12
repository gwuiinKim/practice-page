import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  border-top: 0.5px solid #a9a9a9;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div``;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 80%;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #bebebe;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: #2e5bff;
  margin-left: 10px;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

export default ({ search, handleAddKeyword, handleEnterKeyword }) => (
  <Container>
    <Column>키워드</Column>

    <InputContainer>
      <Input
        placeholder="이름으로 검색하세요"
        value={search.value}
        onChange={search.onChange}
        onKeyPress={handleEnterKeyword}
      />
      <Button onClick={handleAddKeyword}>추가</Button>
    </InputContainer>
  </Container>
);
