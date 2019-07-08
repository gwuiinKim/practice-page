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
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 20px;
`;

const Button = styled.button`
  all: unset;
`;

const UserDetail = ({ userDetail }) => {
  const { id, name, url, isPt, phoneNumber, membership } = userDetail[0];

  return (
    <Container>
      <Column>
        <Img src={url} />
        <Button>수정하기</Button>
      </Column>
      <Column />
    </Container>
  );
};

export default UserDetail;
