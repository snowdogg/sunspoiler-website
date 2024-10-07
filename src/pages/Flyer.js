import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import MusicPlatformList from "../components/MusicPlatformList";
import Helmet from 'react-helmet';

// Put your API key here
builder.init('70e7c856abb3400aaf6f40ad66f992ba');

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function Flyer() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("flyer", {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);
        // console.log(window.location.pathname)
      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
      document.title = content.data.title
      }
    }
    fetchContent();
  }, [window.location.pathname]);
  
  // If no page is found, return 
  // a 404 page from your code.
  // The following hypothetical 
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return < > <div style={{height: "100vh", fontSize: '100px', color: 'lightgreen', backgroundColor: 'black'}}> 404<br></br> <a style={{ fontSize: '50px'}}href="/">return to sunspoiler.com</a> </div></>
  }

//   console.log('content', content)

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
      icon: "/images/soundcloud.svg"
    }
  ];
  console.log('content')
  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <Helmet>
      <meta name="title" property="og:title" content={content?.data?.title} />
      <meta name="description" property="og:description" content={content?.data?.description} />
      <meta name="image" property="og:image" content={content?.data?.image} />
      <meta name="facebook-domain-verification" content="ord6i4by7rszp55cvoiobmh5q2dut6" />
      </Helmet>
      <div style={{height: '100vh', backgroundColor: "black"}}>
        <MusicPlatformList  musicPlatforms={musicPlatforms} featuredIndex={0} simple />
      <BuilderComponent model="flyer" content={content} />  
      </div>
    </>
  );
}