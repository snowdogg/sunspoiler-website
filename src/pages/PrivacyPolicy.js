// import logo from "./logo.svg";
import "../App.css";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Marquee from "../components/Marquee";
import YouTube from "../components/Youtube";
import MusicPlatformList from "../components/MusicPlatformList";
import About from "../components/About";
import Helmet from 'react-helmet';
import { useEffect, useState } from "react";

const Container = styled.div`
  background: rgb(22, 22, 22);
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  p{
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    text-align: center;
    box-sizing: inherit;
    letter-spacing: normal;
    text-transform: none;
    width: 100%;
    font-family: Helvetica, arial, sans-serif;
    margin-top: 0px;
    overflow-wrap: break-word;
    color: rgb(247, 247, 247);
    font-weight: 400;
    flex-grow: 1;
    line-height: 1.5;
    max-width: 100%;
    font-size: 16px;
    margin-bottom: 0 !important;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    text-align: center;
    letter-spacing: normal;
    text-transform: none;
    font-family: Helvetica, arial, sans-serif;
    overflow-wrap: break-word;
    color: rgb(247, 247, 247);
    font-weight: 400;
    font-size: 16px;
    box-sizing: inherit;
    line-height: 1.8;
    margin: 0;
  }
 
`;


const BlockWrapper = styled.div`
  margin-bottom: 50px;
`

const CTA = styled.h1`
  color: white;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 42px;
  margin-bottom: 20px;
  margin-top: 20px;
  letter-spacing: 4px;
  background: rgb(22, 22, 22);
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

export default function Homepage() {
    return (
    <Container>
            <Navigation/>
            <BlockWrapper>
            <CTA style={{marginTop: "50px"}}>PRIVACY POLICY</CTA>
            </BlockWrapper>
            <p style={{color: "white", maxWidth: "80%", margin: "0 auto"}}>
                The only thing we will use your information for is to email you on our mailing list. We will never sell your information to a third party. We will never spam you. I only have this page because meta makes me have one to sell on instagram.
            </p>
            </Container>
    )
}