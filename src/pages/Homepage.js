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


const Image = styled.img`
  ${'' /* background-image: url("/images/hollywood.png"); */}
  width: 80%;
  height: 80%;
`

const ProfilePic = styled.img`
  border-radius: 150px;
  width: 125px;
  height: 125px;
`


const AlbumArt = styled.img`
  ${'' /* background-image: url("/images/hollywood.png"); */}
  width: 80%;
  aspect-ratio: 1/1;
  @media (max-width: 768px) {
    width: 100%;
  
    height: 100%;
  }
`

const Container = styled.div`
  background: rgb(22, 22, 22);
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;


const CenterContainer = styled.div`
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

const MarqueeContainer = styled.div`
  padding-top: 55px;
  background: rgb(22, 22, 22);
`;

const Footer = styled.div`
  color: white;
  text-align: center;
  padding-bottom: 20px;
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

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/spoileralerteveryonedies/",
    icon: "/images/instagram.svg",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@spoileralerteveryonedies",
    icon: "/images/tiktok.svg",
  }
]

const musicPlatforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/6pW8KV09KcQOrT2CigJCCU",
    icon: "/images/spotify.svg",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/album/moment-of-zen-single/1691095736",
    icon: "/images/apple.svg",
  },
  {
    name: "Youtube Music",
    url: "https://music.youtube.com/playlist?list=OLAK5uy_k0pe9Hb-AhSomT96r3Wg0Wf4H9lXwF1BU",
    icon: "/images/youtube.svg",
  },
  {
    name: "Bandcamp",
    url: "https://sunspoiler.bandcamp.com/",
    icon: "/images/bandcamp.svg",
  },
  {
    name: "Soundcloud",
    url: "https://soundcloud.com/sunspoiler",
    icon: "images/soundcloud.svg"
  }
];




function Homepage() {
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

  return (
    <Container>
      <Helmet>
        <title>Sun Spoiler</title>
        <meta name="title" property="og:title" content="Sun Spoiler" />
        <meta name="image" property="og:image" content="https://www.sunspoiler.com/images/mozscreenshot.jpg" />
        <meta name="description" property="og:description" content="Sun Spoiler is a music project by artist and producer Andreas Emmanuel." />
        <meta name="facebook-domain-verification" content="ord6i4by7rszp55cvoiobmh5q2dut6" />
        <script>
          {`  (function (s, e, n, d, er) {
            s['Sender'] = er;
          s[er] = s[er] || function () {
            (s[er].q = s[er].q || []).push(arguments)
          }, s[er].l = 1 * new Date();
          var a = e.createElement(n),
          m = e.getElementsByTagName(n)[0];
          a.async = 1;
          a.src = d;
          m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
          sender('fa131d55e64189')
          `}
        </script>
      </Helmet>
      <Navigation />
      <MarqueeContainer>
        <Marquee content={"Dystopia Pop Vol. 1 Out Now"} />
      </MarqueeContainer>
      
            
              {/* <CenterContainer>
<CTA style={{fontSize: "25px", color: "lightgreen"}}>HOUSE PARTY IN THE VALLEY OCT 31 <a href="mailto:info@sunspoiler.com">CONTACT FOR ADDRESS</a></CTA>
              </CenterContainer>
        */}

      {windowWidth <= 768 ?
        <>

          <BlockWrapper style={{ marginBottom: "0px" }}>
            <CTA style={{ fontSize: "25px" }}>SUN SPOILER</CTA>
            <CenterContainer style={{ marginTop: "20px" }}>

              <ProfilePic src="/images/hair flip 3.png"></ProfilePic>

            </CenterContainer>
            <CTA>LISTEN</CTA>

            <MusicPlatformList musicPlatforms={musicPlatforms} featuredIndex={0} simple></MusicPlatformList>

          </BlockWrapper>
          <BlockWrapper style={{ marginBottom: "5px" }}>
            <BlockWrapper style={{ marginBottom: "20px" }}>
              <CTA>BUY</CTA>
              <CenterContainer>
                <a style={{ color: "white", textDecoration: "none", marginBottom: "5px" }} href="https://square.link/u/DNxAPasl" target="_blank">Dystopia Pop, Vol. 1 On Vinyl</a>
              </CenterContainer>
              <CenterContainer>

                <a style={{ color: "white" }} href="https://square.link/u/DNxAPasl" target="_blank">
                  <AlbumArt style={{ borderRadius: "45px" }} src="/images/original.png" />
                </a>
              </CenterContainer>
              <CTA>FOLLOW</CTA>
              <MusicPlatformList musicPlatforms={socials} simple> </MusicPlatformList>
            </BlockWrapper>

          </BlockWrapper>

          <BlockWrapper style={{ marginBottom: "0px", paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "0px" }}>

            <div style={{ textAlign: "center", marginBottom: "0px" }} className="sender-form-field" data-sender-form-id="lwcy5wd5ammw1ad4ftd"></div>

          </BlockWrapper>




        </>

        : ""}

      <BlockWrapper>
        {windowWidth > 768 ?
        <>
      <CTA>LISTEN</CTA>
           
           <MusicPlatformList musicPlatforms={musicPlatforms} featuredIndex={0} simple></MusicPlatformList>
          
       
        <CTA>WATCH</CTA>
        </>
          : ""

        }

        <YouTube videoId={"XRJ62bzlJ-Q"} />
        <YouTube videoId={"nH3mPx0Hm6c"} />
        <YouTube videoId={"KkfSueQzp74"} />
        <YouTube videoId={"WMyKReB_V8w"} />

        {/* <YouTube videoId={"m02jaxRKuDs"}/> */}
        {windowWidth > 768 ?
          <>


            <BlockWrapper style={{ marginBottom: "0px" }}>
              <CTA>FOLLOW</CTA>
              <MusicPlatformList musicPlatforms={socials} simple> </MusicPlatformList>
            </BlockWrapper>
            <BlockWrapper style={{ marginBottom: "5px" }}>
              <CTA>PURCHASE</CTA>
              <CenterContainer>
                <a style={{ color: "white", textDecoration: "none", marginBottom: "5px" }} href="https://square.link/u/DNxAPasl" target="_blank">Dystopia Pop, Vol. 1 On Vinyl</a>
              </CenterContainer>
              <CenterContainer>

                <a style={{ color: "white" }} href="https://square.link/u/DNxAPasl" target="_blank">
                  <AlbumArt style={{ borderRadius: "45px" }} src="/images/original2.png" />
                </a>
              </CenterContainer>
            </BlockWrapper>

            <BlockWrapper style={{ marginBottom: "20px", padding: "20px" }}>
              <div style={{ textAlign: "center", marginBottom: "0px" }} className="sender-form-field" data-sender-form-id="lwcy5wd5ammw1ad4ftd"></div>

            </BlockWrapper>
            <BlockWrapper>
              <CenterContainer>
                <a href="https://open.spotify.com/album/7Deo3uv2sqxH2jAgdUjdN0" target="_blank" >

                  <AlbumArt src="/images/dystopiaPop.png" />
                </a>
              </CenterContainer>
            </BlockWrapper>


          </>

          : <BlockWrapper> <CenterContainer>
            <a href="https://open.spotify.com/album/7Deo3uv2sqxH2jAgdUjdN0" target="_blank" >
              <AlbumArt src="/images/dystopiaPop.png" />
            </a>
          </CenterContainer>
          </BlockWrapper>}
        {/* <div style={{ width: "100%", display: "flex" }}>
          <video style={{ maxWidth: "400px", margin: "0 auto" }} autoPlay loop muted controls>
            <source src="/images/dystopiaPopTeaser.mp4" type="video/mp4"></source>
          </video>
        </div> */}
      </BlockWrapper>

      <BlockWrapper>
        <CTA>ABOUT SUN SPOILER</CTA>
        <About />
      </BlockWrapper>
      <Footer>
        Copyright © 2024 Sun Spoiler - All Rights Reserved. Contact
        info@sunspoiler.com for inquiries.
      </Footer>

    </Container>
  );
}

export default Homepage;
