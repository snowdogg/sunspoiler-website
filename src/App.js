import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import Routes from './Routes';


const ga4Id = 'G-1JBMFDG5Q6'


function App() {
  useEffect(() => {
    ReactGA.initialize(ga4Id);
  
  }, []);
  return (
    <>
    <Helmet>
    <base href="/" />
  </Helmet>
    <Router>
  
      <Routes />
    
    </Router>
    </>
  );
}

export default App;
