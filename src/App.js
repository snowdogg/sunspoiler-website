// import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Marquee from "./components/Marquee";
import YouTube from "./components/Youtube";
import MusicPlatformList from "./components/MusicPlatformList";
import About from "./components/About";

const Container = styled.div`
  background: rgb(22, 22, 22);
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const MarqueeContainer = styled.div`
  padding-top: 80px;
  background: rgb(22, 22, 22);
`;

const Footer = styled.div`
  color: white;
  text-align: center;
  padding-bottom: 20px;
`;

const CTA = styled.h1`
  color: white;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 42px;
  padding-top: 20px;
  padding-bottom: 20px;
  letter-spacing: 4px;
  background: rgb(22, 22, 22);
  display: flex;
  justify-content: center;
`;

const musicPlatforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/6pW8KV09KcQOrT2CigJCCU?si=lGPCK3TASn69V9dmMr53zQ&nd=1",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/album/moment-of-zen-single/1691095736",
  },
  {
    name: "Youtube Music",
    url: "https://music.youtube.com/playlist?list=OLAK5uy_k0pe9Hb-AhSomT96r3Wg0Wf4H9lXwF1BU",
  },
  {
    name: "Bandcamp",
    url: "https://sunspoiler.bandcamp.com/",
  },
];

function App() {
  return (
    <Container>
      <Navigation />
      <MarqueeContainer>
        <Marquee content={"Nothing Is Real. Modern Life Is A Scam."} />
      </MarqueeContainer>
      <CTA>WATCH</CTA>
      <YouTube videoId={"nH3mPx0Hm6c"} />
      <CTA>LISTEN</CTA>
      <MusicPlatformList musicPlatforms={musicPlatforms}></MusicPlatformList>
      <CTA>ABOUT SUN SPOILER</CTA>
      <About />
      <Footer>
        Copyright © 2023 Sun Spoiler - All Rights Reserved. Contact
        info@sunspoiler.com for inquiries.
      </Footer>
    </Container>
  );
}

export default App;
