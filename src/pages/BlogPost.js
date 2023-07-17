import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { styled } from 'styled-components';

import YouTube from "../components/Youtube";

const Header = styled.h1`
    color: white;
`;

const Video = styled.video`
    overflow-x: hidden;
    width: 100%;
    ${'' /* @media (max-width: 1280px) {
        margin: 0 10% 0 10%;
    } */}
`

const PageContainer = styled.div`
    margin-top: 20%;
    margin: 0 auto;
    color: white;
    max-width: 1000px;
    @media (max-width: 1280px) {
        margin: 0 10% 0 10%;
    }
    p {
        font-size: 15px;
        font-weight: 300;
        
    }
    a {
        color: lightblue;
    }
    
`

const Image = styled.img`
    overflow-x: hidden;
    width: 100%;
`
const CodeBlock = styled.p`
    background-color: #1e1e1e;
    padding: 10px;
    color: #d4ff00;
`

const BlogPost = () => {
    // useParams hook lets us extract the dynamic parts of the URL.
    const { id } = useParams();

    // Use this id to load data for the blog post. You might call a function 
    // that makes an API request to get the post data, something like:
    // const post = loadPost(id);
    

    return (
        <Container>
        <PageContainer>
            {/* <h2>Blog Post {id}</h2> */}
            {id === "ai-music-video" ?   <><Header>How I Used AI To Make An Animated Music Video For Under $500
            </Header> 
            <Image style={{float: "left",marginRight: "10px", width:"100px", borderRadius: "100px"}}src="/images/profilepic.jpg" />
            
            <h3 style={{marginTop:"40px"}}>Andreas Cary<br />
            <span style={{fontSize: "13px", fontStyle:"italic"}}>July 17, 2023</span>
            <br />
          <a style={{fontSize: "13px",  fontStyle:"italic"}}href="https://www.linkedin.com/in/andreas-cary-02b074120/" target="_blank">LinkedIn</a></h3>

           
            <p>
            I recently released a music video for my song “Moment of Zen” that was animated using artificial intelligence. The goal of this article is to showcase a workflow that uses AI video to create a piece of finished art, not just a party trick or a cool effect. 
            </p>
            <p>
            So first of all, the song was very much written, produced and performed by a human, namely myself. I’m blending vocoders and big synths with more human elements like my untreated voice and acoustic guitar to show the balance between the automated and robotic lifestyle many of us are trapped in in modern society and the human, creative side of us that is often stifled.
            </p>
            <p>
            I knew I wanted the music video to have an animated feel to it but I didn’t have a budget for the kind of animation I wanted, namely something with an anime feel that could evoke the imagery that song demands. Then I started experimenting with Stable Diffusion using Automatic1111 WebUI. I’ve included some of the tutorial videos that guided me along the way.
            </p>
            <p>
            I did most of the Stable Diffusion work using a Cloud GPU provider called runpod.io that provided me an RTX a5000 at 44 cents a minute when running, and around 3 cents when inactive. To install all the checkpoints and models you need, you’ll need a small amount of linux knowledge like wget and a basic understanding of the stable diffusion folder/file structure. Prompt Queen provides a <a href='https://youtu.be/--Z03wbDp_s' target='_blank'>fantastic guide</a> on how to get started with <a href='https://runpod.io' target='_blank'>runpod.io</a> Sidenote, I used the <a href='https://civitai.com/models/1102/synthwavepunk' target='_blank'>Synthwave Punk</a> model for the majority of my edits.
            </p>
            <p>

For the footage of myself, I rented a green screen studio and paid a videographer friend of mine a heavily discounted rate for 3 hours of time. I filmed a series of green screen lip syncs and some action footage with the intention of running it all through Stable Diffusion afterwards. This was the majority of the budget for the video. The rest of the budget was $100 on runpod.io, bringing the total to just $450.

            </p>
            <p>
            To get the anime feel, I made a general rule that I would create 12fps footage throughout this project.I started by experimenting with the Deforum plugin. Here’s <a href="https://www.youtube.com/watch?v=dqkQo2alZvU&ab_channel=MattWolfe" target="_blank">a guide to getting started with deforum.</a> I generated most of the backgrounds using text to video keyframe prompts in Deforum. The only technical expertise you really need here is being able to write JSON, and Stable Diffusion provides a link to a validation site to make sure you’ve got the syntax right. Luckily my four years professional experience as a Software Engineer came in handy here. Here’s an example of some typical JSON I’d use for these videos: 
            </p>
            <CodeBlock>{'{'}    <br/>
            "0": "1980s office building, the haindl tower tarot  fog  stars through clouds, digital art",
    <br/>
	{"    "}"60": "clouds, police helicopters over a city skyline, lightning",
    <br/>
    {'     '}"120": "dark clouds, skyscrapers, city plan from above, a flock of drones and crows",
           <br/>
           {'     '}"180": "raining on a tall brutalist office building, tarot card, the tower, dark",
           <br/>
           {'     '}"240":  "raining on a tall brutalist office building, tarot card, the tower, dark"
           <br/>
{'}'}
</CodeBlock>
<p>Here's an example of the deforum video I created for the outro of the video:</p>
<Video controls src={"/images/deforum_video.mp4"}></Video>
<p>

Then in the positive prompts applied to all keyframes I’d put something like “blue light, anime, synthwave, cyberpunk” or whatever I deemed appropriate for that shot. The most consistent negative prompt I used was “text” so there wouldn’t be garbled words in my videos.


</p>
<p>

I took the live footage and used ffmpeg to export every other frame so I could get that 12fps feel. It’s important to make sure the video has the color key already applied so that the images resulting will have a transparent background. the Here’s a typical command I would use:


</p>
<CodeBlock>ffmpeg -i input.mov -vf "select=not(mod(n\,2)),scale=980:540" -vsync vfr output_%04d.png

</CodeBlock>
<p>I’m not an expert in using ffmpeg so I had ChatGPT 4 write my ffmpeg commands and a little bit of bash scripting to manipulate the frames. If you understand what you’re trying to do with the footage and have a basic understanding of a unix terminal this should be pretty straightforward especially with ChatGPT as your copilot.</p>
<p>Next I would take one of the newly exported frames and load it into Automatic1111’s img2img tab. My usual formula was to set the width and height to 980x540, essentially ½ of a 1080p video frame size. As you can see in the ffmpeg command above, I’d already resized the frames of the video to 980:540 using the scale argument. The key here is to use a high CFG scale and a low denoising strength and then play around with the prompt and the amount of denoising until you find the style you like and then lock in the seed as you see fit. I used “Interrogate Clip” to get my prompt started and just kind of riffed from there: </p>
<CodeBlock>
masterpiece of a man with long shoulder-length hair with a face like {'[[[<hypernet:Andreas Emmanuel:1>]]]'} playing a guitar on stage, promotional image,
wearing a choker, cyberpunk, digital art, {'[[anime]]'}, comic, guitar, painting, youthful, guitar neck, smooth edges,

</CodeBlock>
<p>
{'<hypernet:Andreas Emmanuel:1>'} represents a hypernetwork I programmed on photos of my face. I admittedly might not have done the best job creating a hypernetwork, and a Lora could’ve been a better choice. Due to my time constraints, I began to understand that optimizing this model was going to limit the amount of time I had for the other processes to complete this video. For what it’s worth, these are the images I used to train the hypernetwork:
</p>
<Image src={"/images/TrainingImages0.png"} alt="small images of the author's face" />
<Image src={"/images/TrainingImages1.png"} alt="small images of the author's face" />
<Image src={"/images/TrainingImages3.png"} alt="small images of the author's face" />
<Image src={"/images/TrainingImages4.png"} alt="small images of the author's face" />

 <p>Back to the img2img workflow. Next, I used a negative prompt of: 
</p>
<CodeBlock>
woman, female, goatee, beard, mustache, text, disfigured face, disfigured limbs, disfigured fingers, too many limbs, too many fingers, old,
wrinkled, wrinkled forehead, blurry, distorted, hair texture, extra fingers, random
fingers and digits, cracked face, wrinkles on forehead, distorted face, text, watermark, (deformed hands], extra hands, hand in torso
</CodeBlock>
<p>
Of course you would adopt these parameters to whatever suited your project, but this is what worked for my purposes. For some of the images where my mouth was moving I used controlent to try to match the facial movements. This proved very challenging but I was able to approximate enough for the clips I needed to make it work. Once I found an img2img setting that worked for one frame I would upload all the exported frames that ffmpeg created into a folder on the cloud server, set that folder as the Input Directory in the Batch tab of img2img, and run the batch job. It’s also important to make sure that transparent background are filled in with a green color in the settings tab of Automatic1111. This resulted in a folder full of transformed images.

</p>
<Image src={"/images/Img2Img0.png"} alt={"an image of my automatic 11 11 workflow as described in the article"}></Image>
<Image src={"/images/Img2Img1.png"} alt={"an image of my automatic 11 11 workflow as described in the article"}></Image>
<Image src={"/images/Img2Img2.png"} alt={"an image of my automatic 11 11 workflow as described in the article"}></Image>
<p>After exporting the images, you can use ffmpeg either on the server or on your local computer after downloading the transformed frames. It's important to remember that we have only extracted half of the frames, so in order to put the footage back together and have it be the same length we need to put the video back together using each frame twice, thus achieving the 12 fps animation effect. That’s exactly what this ffmpeg command does: </p>
<CodeBlock>
ffmpeg -pattern_type glob -i '*.png' -vf "setpts=2.0*PTS" -r 24 -c:v libx264 output.mov


</CodeBlock>
<p>
Now you have a new clip that corresponds with the original and you can drop it into a Final Cut or Adobe Premiere timeline replacing the original, apply a color key and whatever other effects you’d like in your video editor of choice. 

</p>
<p>Next I would combine the transformed clips with the backdrops I created with Deforum. The rest of the process was just utilizing traditional video editing skills. In the end I upscaled the content from 1080p to 4k using Topaz Labs AI upscaling software.
</p>
<p>And here’s the end result!
</p>
<YouTube videoId={"nH3mPx0Hm6c"} />

  </>

: ""}
            {/* Show blog post data here, something like:
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            */}
        </PageContainer>
        </Container>
    );
}

export default BlogPost;
