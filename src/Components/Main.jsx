import video from '../assets/videos/hero.mp4';
import smVideo from '../assets/videos/smallHero.mp4';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { useEffect, useState } from 'react';

gsap.registerPlugin(useGSAP);

const Main = () => {
const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ? smVideo : video)

const handleVideo = ()=>{
    if(window.innerWidth <760){
        setVideoSrc(smVideo)
    }else{
        setVideoSrc(video)
    }
}

useEffect(()=>{
    window.addEventListener('resize',handleVideo)
    return ()=>{
        window.removeEventListener('resize',handleVideo)
    }
},[])

    useGSAP(()=>{
        gsap.to('#videoTag',{
            opacity:1,
            delay: 1
        })
        gsap.to('#cta',{
            opacity:1,
            y:-50,
            delay:1.5
        })
    },[])
 
  return (
    <section className='bg-black w-full min-h-screen py-10 relative'>
        <div className='h-5/6'>
            <p id='videoTag' className='text-gray-400 text-center p-5 text-2xl opacity-0 font-bold'>iPhone 15 Pro Max</p>
            <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                <source  src={videoSrc} type='video/mp4'/>
            </video>
        </div>
        <div id='cta' className='flex flex-col item-center opacity-0 translate-y-20'>
            <a href="highlight" className='text-white text-center font-xl'>Buy</a>
            <p className='font-normal text-white text-center'>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Main
