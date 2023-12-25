import "./index.css"
import { useState, useEffect,useRef,useCallback } from 'react';

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({audioRef,progressBarRef,duration,setTimeProgress,nextMusic,backMusic,music,indexMusic,setTitle}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef();




  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  const repeat = useCallback(()=>{
   
    const currentTime = audioRef.current.currentTime;
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    
    setTimeProgress(currentTime);
    if(audioRef.current.currentTime>0 && duration>0 && audioRef.current.currentTime == duration){
      nextMusic()
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);
   
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
     
    } else {
      audioRef.current.pause();
    }
    
    playAnimationRef.current = requestAnimationFrame(repeat);
    setTitle(music[indexMusic].title)
  }, [isPlaying, audioRef,repeat,setTitle,indexMusic,music,audioRef]);
  

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button onClick={backMusic}>
          <IoPlaySkipBackSharp className="btIcon" />
        </button>
        {/* <button>
          <IoPlayBackSharp />
        </button> */}

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp className="btIcon" /> : <IoPlaySharp className="btIcon" />}
        </button>
        {/* <button>
          <IoPlayForwardSharp />
        </button> */}
        <button onClick={nextMusic}>
          <IoPlaySkipForwardSharp className="btIcon" />
        </button>
      </div>
    </div>
  );
};

export default Controls;