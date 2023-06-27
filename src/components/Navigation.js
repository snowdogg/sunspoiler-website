//create a simple react component that renders a navigation bar
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from '../styles/GlobalStyles';


const Title = styled.h3`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  text-align: center;
  cursor: pointer;
  box-sizing: inherit;
  overflow-wrap: break-word;
  color: rgb(247, 247, 247);
  display: inline-block;
  text-transform: uppercase;
  font-family: "Archivo Black", arial, sans-serif;
  max-width: 100%;
  letter-spacing: 2px;
  line-height: 1.2;
  font-weight: 400;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  font-size: 12px;
  width: 33.3333%;
  font-weight: 400;
`;

const Header = styled.div`
  ${'' /* padding: 20px; */}
  margin-top: 20px;
  position: absolute;
  top: 0;
  background: transparent;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  ${'' /* width: 100vw; */}
`;

const Navigation = () => {
  return (
    <Header>
    <GlobalStyles/>
      <Title>Home</Title>
      <Title>Sun Spoiler</Title>
      <Title>Contact</Title>
    </Header>
  
  );
};

export default Navigation;
