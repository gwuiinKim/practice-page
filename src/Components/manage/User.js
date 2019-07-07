import React from "react";
import styled from "styled-components";

const Container = styled.li`
  background-color: white;
  margin-bottom: 20px;
  font-size: 17px;
  padding: 30px 0px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(5, minmax(max-content, 1fr));
  place-items: center;
`;

const Content = styled.span``;

export default ({ user }) => {
  const { name, phoneNumber, gender, isPt, membership, id } = user;

  return (
    <Container id={id}>
      <Content>{name}</Content>
      <Content>{gender}</Content>
      <Content>{isPt}</Content>
      <Content>{membership}</Content>
      <Content>{phoneNumber}</Content>
    </Container>
  );
};
