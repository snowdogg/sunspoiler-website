import React from 'react';
import styled, { keyframes } from 'styled-components';

const MarqueeContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  color: white;
  position: relative;
`;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${marqueeAnimation} 15s linear infinite; /* Adjust animation duration for slower pace */
`;

const MarqueeText = styled.span`
  display: inline-block;
  flex-shrink: 0;
  padding-right: 10%; /* Adjust spacing between repeated text */
  -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;
    box-sizing: inherit;
    text-transform: none;
    font-family: Helvetica, arial, sans-serif;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    overflow-wrap: break-word;
    color: rgb(247, 247, 247);
    letter-spacing: 2px;
    font-weight: 400;
    line-height: 1.25;
    font-size: 16px;
`;

const Marquee = ({ content }) => {
  const phrases = Array.isArray(content) ? content : [content];
  return (
    <MarqueeContainer>
      <MarqueeTrack>
        {phrases.map((phrase, index) => (
          <MarqueeText key={index}>
            {phrase}
          </MarqueeText>
        ))}
        {phrases.map((phrase, index) => (
          <MarqueeText key={`dup-${index}`}>
            {phrase}
          </MarqueeText>
        ))}
      </MarqueeTrack>
    </MarqueeContainer>
  );
};

export default Marquee;
