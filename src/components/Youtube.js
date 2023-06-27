import React, { useState, useEffect } from 'react';import YouTube from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    width: 100vw;
`
const MyComponent = ({videoId}) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const opts = {
    width: windowWidth >= 500 ? '90%' : '100%',
    height: '450',
  };
  return (
    <Container>
      <YouTube opts={opts} videoId={videoId} />
    </Container>
  );
};

export default MyComponent;
