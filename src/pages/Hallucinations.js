import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga4';
import GlobalStyles from '../styles/GlobalStyles';
import { openSpotifyWithFallback } from '../utils/openSpotify';
import Youtube from '../components/Youtube';

const SPOTIFY_URI = 'spotify:track:3UgAifOHzCayjS8CdYVwhF';
const SPOTIFY_WEB_URL = 'https://open.spotify.com/track/3UgAifOHzCayjS8CdYVwhF';

const secondaryPlatforms = [
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/sun-spoiler/1691028997', icon: '/images/apple.svg' },
  { name: 'YouTube Music', url: 'https://www.youtube.com/watch?v=j7McFHBUKKE', icon: '/images/youtube.svg' },
  { name: 'Bandcamp', url: 'https://sunspoiler.bandcamp.com/', icon: '/images/bandcamp.svg' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/sunspoiler', icon: '/images/soundcloud.svg' },
];

const Page = styled.div`
  background: #0b0b0b;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px 24px 0;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 500px;
    padding-top: 20px;
  }
`;

const Brand = styled.div`
  color: #f5f5f5;
  font-family: 'Archivo Black', arial, sans-serif;
  font-size: clamp(12px, 3.4vw, 14px);
  letter-spacing: 4px;
  text-align: center;
  margin-bottom: clamp(16px, 4vw, 26px);
`;

const HeroFrame = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;
  background: #000;

  @media (min-width: 480px) {
    border-radius: 2px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  filter: grayscale(1) contrast(1.6) brightness(0.65);
  display: block;
`;

const HeroVignette = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.65) 100%);
  pointer-events: none;
`;

const HeroFade = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11, 11, 11, 0) 60%, #0b0b0b 100%);
  pointer-events: none;
`;

const Title = styled.h1`
  color: #ffffff;
  font-family: 'Anton', 'Archivo Black', arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  line-height: 0.88;
  letter-spacing: -0.5px;
  font-size: clamp(48px, 14vw, 84px);
  width: 100%;
  margin: clamp(14px, 4vw, 22px) 0 8px;
`;

const SubBrand = styled.div`
  color: #ffffff;
  font-family: 'Archivo Black', arial, sans-serif;
  font-size: clamp(13px, 3.6vw, 16px);
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 10px;
`;

const Tagline = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Archivo Black', arial, sans-serif;
  font-size: clamp(10px, 2.6vw, 11px);
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: clamp(20px, 5.5vw, 30px);
`;

const CTAButton = styled.a`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  min-height: 60px;
  background: #1ed760;
  color: #000000;
  text-decoration: none;
  font-family: 'Archivo Black', arial, sans-serif;
  font-size: clamp(15px, 4vw, 18px);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: 999px;
  box-shadow: 0 10px 28px rgba(30, 215, 96, 0.28);
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.97);
  }
`;

const SpotifyIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  filter: brightness(0);
`;

const SecondaryLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  width: 100%;
  margin-top: clamp(18px, 5vw, 24px);
  padding: 14px 8px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  box-sizing: border-box;
`;

const SecondaryLink = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 12px;
  color: rgba(255, 255, 255, 0.5);
  font-family: Helvetica, arial, sans-serif;
  font-size: 12px;
  letter-spacing: 0.3px;
  text-decoration: none;
  border-right: 1px solid rgba(255, 255, 255, 0.12);

  &:last-child {
    border-right: none;
  }
`;

const SecondaryIcon = styled.img`
  filter: grayscale(1) brightness(1.9) contrast(0.85);
  opacity: 0.9;
`;

const Footer = styled.div`
  width: 100%;
  margin-top: clamp(36px, 9vw, 52px);
  padding: 26px 0 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
`;

const FooterBrand = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Archivo Black', arial, sans-serif;
  font-size: 12px;
  letter-spacing: 4px;
  margin-bottom: 6px;
`;

const FooterTagline = styled.div`
  color: rgba(255, 255, 255, 0.35);
  font-family: Helvetica, arial, sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Hallucinations = () => {
  const clickLockRef = useRef(false);

  const handleSpotifyClick = useCallback((e) => {
    e.preventDefault();
    if (clickLockRef.current) return;
    clickLockRef.current = true;

    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'SpotifyClick');
    }
    ReactGA.event('spotify_click', { label: 'Hallucinations' });

    openSpotifyWithFallback({ uri: SPOTIFY_URI, webUrl: SPOTIFY_WEB_URL });

    window.setTimeout(() => {
      clickLockRef.current = false;
    }, 2000);
  }, []);

  return (
    <Page>
      <GlobalStyles />
      <Helmet>
        <title>Hallucinations - Sun Spoiler</title>
        <meta name="title" property="og:title" content="Hallucinations - Sun Spoiler" />
        <meta name="description" property="og:description" content="Hallucinations, the new single from Sun Spoiler. Listen now on Spotify." />
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </Helmet>

      <Content>
        <Brand>SUN SPOILER</Brand>

        <HeroFrame>
          <HeroImage src="/images/reek.webp" alt="Sun Spoiler" fetchPriority="high" />
          <HeroVignette />
          <HeroFade />
        </HeroFrame>

        <Title>Hallucinations</Title>
        <SubBrand>SUN SPOILER</SubBrand>
        <Tagline>NEW SINGLE OUT NOW</Tagline>

        <CTAButton href={SPOTIFY_WEB_URL} onClick={handleSpotifyClick}>
          <SpotifyIcon src="/images/spotify.svg" alt="" />
          Listen on Spotify
        </CTAButton>

        <SecondaryLinks>
          {secondaryPlatforms.map((platform) => (
            <SecondaryLink key={platform.name} href={platform.url} target="_blank" rel="noreferrer">
              <SecondaryIcon width="16" height="16" src={platform.icon} alt="" />
              {platform.name}
            </SecondaryLink>
          ))}
        </SecondaryLinks>

        <Youtube videoId="j7McFHBUKKE" />

        <Footer>
          <FooterBrand>SUN SPOILER</FooterBrand>
          <FooterTagline>just wrote a letter to josephine<br />shes the girl who stole my dopamine</FooterTagline>
        </Footer>
      </Content>
    </Page>
  );
};

export default Hallucinations;
