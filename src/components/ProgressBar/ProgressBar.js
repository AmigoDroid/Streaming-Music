import { useCallback,useEffect } from "react";
import "./index.css"
const ProgressBar = ({ progressBarRef,audioRef,timeProgress,duration }) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
      };
      const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };
      let ct = formatTime(timeProgress);
      let t = formatTime(duration);
     
    return (
      <div className="progress">
       <div className="timers">
       <span className="time current">{formatTime(timeProgress)}</span>
       
        <span className="time">{formatTime(duration)}</span> 
       </div>
        <input type="range" onChange={handleProgressChange} defaultValue={0} ref={progressBarRef} />
      </div>
    );
  };
  
  export default ProgressBar;