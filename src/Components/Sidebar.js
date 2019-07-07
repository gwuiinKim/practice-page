import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HomeIcon, PeopleIcon, StatisticsIcon } from "./Icons";

const Sidebar = styled.nav`
  left: 0px;
  top: 0px;
  position: fixed;
  background-color: white;
  height: 100%;
  padding-top: 90px;
  width: 80px;
  z-index: 10;
  border-right: 0.5px solid rgb(224, 224, 224);
  display: flex;
  flex-direction: column;
  align-items: center;
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
    <Link to="/manage">
      <PeopleIcon />
    </Link>
  </Sidebar>
);
