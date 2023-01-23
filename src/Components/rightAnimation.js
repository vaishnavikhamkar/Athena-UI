import  React,{useState, useRef,useEffect} from 'react';
import Axios from "axios";
import "./rightAnimation.css";
import gsap from "gsap";
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function rightAnimation(){


    
    const videos=gsap.utils.toArray(".Video")

    videos.forEach(function(video, i) {
        
        ScrollTrigger.create({
            trigger: 'video',
            scroller: '.appVideos',
            start: 'top top',
            end: '20%',
            markers: true,
            onEnter:() => video.play(),
            onEnterBack: () => video.play(),
            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause(),
        });
    
    });

    

  return (
    <div className="right">
       <video className="Video" id="video1"  src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"  autoPlay loop data-object-fit="cover" muted playsInline>
       </video>
       <br/>
       <video className="Video" id="video2"  src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4"  autoPlay loop data-object-fit="cover" muted playsInline>
       </video>
       <br/>
       <video className="Video" id="video3"  src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4"  autoPlay loop data-object-fit="cover" muted playsInline>
       </video>
    </div>
  )
}

export default rightAnimation;