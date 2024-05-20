import React, { useEffect } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga4';


const ga4Id = 'G-1JBMFDG5Q6'




const handleLinkClick = (label) => {
  console.log('clicked ' + label)
  let value = 25;
  if (label === "Spotify")
    value = 100;
  
  ReactGA.event({
    category: "link",
    action: "click",
    label: label,
    value: 100
  });

  console.log(value+" points for Gryffindor!")

};


const Container = styled.div`
    text-align: center;
    background: rgb(22, 22, 22);
    text-align: center;
    align-items: center;
`

const ButtonContainer = styled.div`
    padding: 8px;
    width: 40%;
    text-align: center;
    align-items: center;
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    
`

const Button = styled.a`
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    box-sizing: inherit;
    // background-color: rgb(255, 255, 255);
    position: relative;
    align-items: left;
    text-decoration: none;
    overflow-wrap: break-word;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    font-family: 'Archivo Black', arial, sans-serif;
    max-width: 100%;
    letter-spacing: 2px;
    font-weight: 400;
    transition-property: background-color;
    transition-duration: .3s;
    transition-timing-function: ease-in-out;
    border-style: none;
    display: inline-flex;
    ${'' /* padding-left: 40px;
    padding-right: 40px; */}
    padding-top: 8px;
    padding-bottom: 8px;
    min-height: 20px;
    // border-radius: 48px;
    color: white; //rgb(0, 0, 0);
    text-shadow: none;
    width: 100%;
    font-size: 14px;

  
  }
`
const MusicPlatformList = ({ musicPlatforms, simple, featuredIndex }) => {
  useEffect(() => {
    ReactGA.initialize(ga4Id);
  
  }, []);
  
  return (
  
    <Container>
        <Helmet>
      <style>
        {`  .featured {
      animation: jump 1s ease-in-out infinite;
    }

    @keyframes jump {
      0%, 100% {
          transform: translateY(0);
      }
      50% {
          transform: translateY(-10px);
      }`}
      </style>
      </Helmet>
      {simple ?    
      musicPlatforms.map((platform, index) => (
        <a style={{padding: "15px"}} href={platform.url} target="_blank" rel="noreferrer" key={index} onClick={() => handleLinkClick(platform?.name)} >
        <img className={ index===featuredIndex ? "featured" : ""} width="30px" height="30px" src={platform.icon} alt={platform.name}/>
        </a>
      ))  
      : 
      
      musicPlatforms.map((platform, index) => (
        <ButtonContainer>
          <img width="30px" height="30px" src={platform.icon} alt={platform.name}/>
   
        <Button href={platform.url} target="_blank" key={index}>
        {platform.name}
        </Button>
        </ButtonContainer>
      )) 
      
      }
  
    </Container>
  );
};

export default MusicPlatformList;
