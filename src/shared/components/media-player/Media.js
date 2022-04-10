import React, { useState } from "react";
import Button from "../form-component/button/Button";
import Icon from "../icons/Icon";

import './Media.css'




import NextArrowIcon from "../icons/NextArrowIcon";
import PlayArrowIcon from "../icons/PlayArrowIcon";
import PauseIcon from "../icons/PauseIcon";
import SpeakerIcon from "../icons/SpeakerIcon";
import MuteSpeakerIcon from "../icons/MuteSpeakerIcon";
import FullScreenIcon from "../icons/FullScreenIcon";

const Media = props =>{

    const [isPlaying , setIsPlaying] = useState(false)
    const [video, setVideo] = useState(null)
    const [watchBar, setWatchBar] = useState(null)
    const [soundComponent, setSoundComponent] = useState(null)
    const [soundVolume, setSoundVolume] = useState(0.5)
    const [volume, setVolume] = useState(0.5)
    const [size,setSize]= useState([1024,720])
    const [isFullScreen, setIsFullScreen] = useState(false)
    const onReadyHandler = event =>{
        setVideo(event.target)
        setWatchBar(document.querySelector('.bar-'+props.id))
     
        setSoundComponent(document.querySelector('.sound-'+props.id))
    }
    const clickHandler = event =>{

        if(!isPlaying){
            video.play()
            setIsPlaying(true)
        }else{
            video.pause()
            setIsPlaying(false)    
        }

        
    }

    const timeUpdateHandler = event =>{
        let time =  video.currentTime
        let length  = video.duration
        let per = (time/length)
        // watchBar.childNodes[0].value = time
       
     
        watchBar.childNodes[0].setAttribute('min', 0)
        watchBar.childNodes[0].setAttribute('max', length*100)
        // watchBar.childNodes[0].setAttribute('value', time*100)
        watchBar.childNodes[0].value = time*100
        watchBar.childNodes[0].style.background = `linear-gradient(to right, rgb(223, 16, 16) 0%, rgb(223, 16, 16) ${per*100}%, #fff ${per*100}%, #fff 100%)`
       
    }
    const onInputHandler = event =>{
        video.currentTime = event.target.value/100
        
    }


    const soundMouseEnterHandler = event =>{
        soundComponent.childNodes[1].style.width = 100 +'px'
        soundComponent.childNodes[1].classList.remove('no-thumb')
        
    }
    const soundMouseLeaveHandler = event =>{
        soundComponent.childNodes[1].style.width = 0 +'px'
        soundComponent.childNodes[1].classList.add('no-thumb')
    }


    const soundSpanHandler = event =>{
        video.volume = event.target.value /100
        event.target.style.background =`linear-gradient(to right, black 0%, black  ${event.target.value}%, rgba(255, 255, 255, 0.2) ${event.target.value/2}%, rgba(255, 255, 255, 0.2) 100%`
        setSoundVolume(video.volume)
        setVolume(video.volume)
        // console.log(event.ta)
    }
    const soundClickHandler = event =>{
        if(video.volume != 0){
            video.volume = 0
            setVolume(0)
            soundComponent.childNodes[1].style.background =`linear-gradient(to right, black 0%, black  0%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%`
            soundComponent.childNodes[1].value = 0
        }else{
            video.volume = soundVolume
            setVolume(soundVolume)
            soundComponent.childNodes[1].style.background =`linear-gradient(to right, black 0%, black  ${soundVolume*100}%, rgba(255, 255, 255, 0.2) ${soundVolume*100}%, rgba(255, 255, 255, 0.2) 100%`
            soundComponent.childNodes[1].value = soundVolume*100
        }

    }
    const fullScreen = event =>{
        
        if(!document.fullscreenElement){
            video.parentNode.requestFullscreen()
            setIsFullScreen(true)
            
        }else{
            document.exitFullscreen()

            setIsFullScreen(false)
            
        }

    }


    const onContextMenuHandler = event =>{
        event.preventDefault()
    }
    return <div   style={{width:size[0]}} className="video-container"  >
        <video width={'100%'}  src={props.src} 
        controls={false}
        onContextMenu={onContextMenuHandler}
        controlsList="nodownload"
        onClick={clickHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedDataCapture={onReadyHandler}
        onDoubleClick={fullScreen}
        
        />
        <div className={`watch-bar bar-${props.id}`}>
            <input type={'range'} onInput={onInputHandler} />
        </div>
        <div className="video-container__items-left">
            {!isPlaying ? <PlayArrowIcon onClick={clickHandler} className='icons' width='20px' />
            :<PauseIcon  className='icons' onClick={clickHandler} width='22px' />}
            <NextArrowIcon to={'../player/2'} className='icons' width='20px' />

            <div className={`video-container__items-sound sound-${props.id} `} onMouseEnter={soundMouseEnterHandler} onMouseLeave={soundMouseLeaveHandler}>
                {volume == 0 ? <MuteSpeakerIcon className='icons' width='25px' onClick={soundClickHandler} /> :<SpeakerIcon className='icons' width='25px' onClick={soundClickHandler} />}
                <input type={'range'} className="sound-span no-thumb" onChange={soundSpanHandler} />
            </div>
            

        </div>
        <div className="video-container__items-right">
            <FullScreenIcon width='23px' className='icons' onClick={fullScreen}/>


        </div>
    </div>
}

export default Media