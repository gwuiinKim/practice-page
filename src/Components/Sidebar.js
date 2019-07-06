import React from "react";
import styled from "styled-components";
import { HomeIcon, PeopleIcon, Statistics, StatisticsIcon } from "./Icons";

const Sidebar = styled.nav`
  left: 0px;
  top: 0px;
  position: fixed;
  background-color: white;
  height: 100%;
  padding-top: 90px;
  width: 80px;
  z-index: 1500;
  border-right: 0.5px solid rgb(224, 224, 224);
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-bottom: 50px;
  }
`;

export default () => (
  <Sidebar>
    <HomeIcon />
    <StatisticsIcon />
    <PeopleIcon />
  </Sidebar>
);
