import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeIcon, StatisticsIcon } from "./Icons";

const Sidebar = styled.nav`
  left: 0px;
  top: 0px;
  position: fixed;
  background-color: white;
  height: 100%;
  padding-top: 90px;
  width: 160px;
  z-index: 10;
  /* border-right: ${props => props.theme.border}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  box-shadow: ${props => props.theme.boxShadow};
  svg {
    cursor: pointer;
    margin-bottom: 50px;
  }
`;

export default () => (
  <Sidebar>
    <Link to="/">
      <HomeIcon />
    </Link>
    <Link to="/statistics">
      <StatisticsIcon />
    </Link>
    <Link to="/manage">회원관리</Link>
  </Sidebar>
);
