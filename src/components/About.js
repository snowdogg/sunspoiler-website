//create a simple component
import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CenterContainer2 = styled.div`
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
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: white;
  margin: 0 10% 0 10%;
  text-align: center;
`;



const Image = styled.img`
  ${'' /* background-image: url("/images/hollywood.png"); */}
  width: 80%;
  height: 80%;
`


const About = () => {
  return (
    <>
      <CenterContainer>
        <Image src="/images/hollywood.png" />
      </CenterContainer>
      <br></br>      <br></br>
      <CenterContainer2>
        <p>
          <b>Sun Spoiler</b> is the new project from Hollywood, CA
          songwriter/producer/guitarist Andreas Emmanuel. The debut two track
          release includes A side Moment Of Zen and AA side Need to Know,
          showcasing experimental synth pop stylings that recall influences from
          Daft Punk to Pink Floyd with a healthy dose of the Scarface
          soundtrack.
          </p>
        
      </CenterContainer2>
      <br></br>      <br></br>
      <CenterContainer2>
      <p> <b>Moment of Zen</b> is accompanied by a self-directed music
          video that uses generative AI animation to bring to life the song’s
          ghosttronica vision of present-day dystopia.
        </p>
      </CenterContainer2>
      <br></br>      <br></br>
    </>
  );
};

export default About;
