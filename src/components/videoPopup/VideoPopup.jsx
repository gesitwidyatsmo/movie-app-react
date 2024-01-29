import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`${show ? 'visible' : 'invisible'} fixed inset-0 flex items-center justify-center z-50`}>
      <div className="opacityLayer absolute top-0 left-0 w-full h-full bg-opacity-25 bg-black backdrop-blur-[3.5px] transition-opacity duration-400" onClick={hidePopup}></div>
      <div className="videoPlayer relative h-44 aspect-w-16 aspect-h-9 transform transition-transform duration-250 sm:w-[800px] sm:h-[450px]">
        <span className="closeBtn absolute top-[-20px] right-0 text-white cursor-pointer" onClick={hidePopup}>
          X Close
        </span>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls width="100%" height="100%" playing={false} />
      </div>
    </div>
  );
};

export default VideoPopup;
