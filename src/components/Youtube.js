import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    
    margin: 20px auto;
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
    height: '450',
    width: windowWidth >= 1280 ? '925' : (windowWidth >= 500 ? '90%' : '300px'), // 300px max width for small screens
};

  return (
    <Container>
      <YouTube opts={opts} videoId={videoId} />
    </Container>
  );
};

export default MyComponent;
