import React from "react";
import styled from "styled-components";

const Container = styled.li`
  cursor: pointer;
  background-color: white;
  margin-bottom: 20px;
  font-size: 17px;
  padding: 30px 0px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(5, minmax(max-content, 1fr));
  place-items: center;
  &:hover {
    background-color: ${props => props.theme.blueColor};
    color: white;
  }
  ${props => props.theme.boxShadow}
`;

const Content = styled.span`
  user-select: none;
`;

export default ({ user, handleUserClick }) => {
  const { name, phoneNumber, gender, isPt, membership, id } = user;

  return (
    <Container id={id} onClick={handleUserClick}>
      <Content>{name}</Content>
      <Content>{gender}</Content>
      <Content>{isPt}</Content>
      <Content>{membership}</Content>
      <Content>{phoneNumber}</Content>
    </Container>
  );
};
