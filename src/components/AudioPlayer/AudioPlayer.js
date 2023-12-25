import "./index.css"
import { useState,useRef, useEffect } from 'react';

import DisplayTrack from '../DisplayTrack/DisplayTrack';
import Controls from '../Controls/Controls';
import ProgressBar from '../ProgressBar/ProgressBar';

const AudioPlayer = () => {
  const [indexMusic,setindexMusic] =  useState(0)
  const [currentTrack, setCurrentTrack] = useState([]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [music,setMusic] = useState([]);
  const [title,setTitle] = useState("Music Player")
  const audioRef = useRef();
  const progressBarRef = useRef();
  //setTitlePage,kkkkkk
  document.title = title;
  useEffect(()=>{
    fetch("https://vast-tick-shrug.cyclic.app/")
    .then((response) =>{return response.json()})
    .then((resolve)=>{ 
      setCurrentTrack(resolve[indexMusic])
      setMusic(resolve)
      setTitle(resolve[0].title)
    })  
    
  },[setCurrentTrack,setMusic,indexMusic]);

  const nextMusic = ()=>{
    if(indexMusic == music.length -1){
      setCurrentTrack(music[0])
      setindexMusic(0)
    }else{
      setindexMusic(indexMusic + 1)
      setCurrentTrack(music[indexMusic]) 
    }
  };
  const backMusic = ()=>{
    if(indexMusic==0){
      setCurrentTrack(music[music.length - 1])
      setindexMusic(music.length -1);
    }else{
      setindexMusic(indexMusic -1)
      setCurrentTrack(music[indexMusic])
    }
  };


  return (
    <div className="audio-player">
      <div>
       {music.length==0?<p>carregando...</p>:<div className="inner">
         <DisplayTrack {...{currentTrack,audioRef,setDuration,progressBarRef,indexMusic,music}}/>
         <div className="innerControls">
           <Controls {...{audioRef, progressBarRef, duration, setTimeProgress,nextMusic,backMusic,music,indexMusic,setTitle}} />
        <ProgressBar {...{progressBarRef,audioRef,timeProgress,duration}}/>
         </div>
       </div>}
      </div>
    </div>
  );
};
export default AudioPlayer;
