import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
  return(  
    <div className='player-wrapper'>
        <h4>Video Player</h4>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=Ks3_kuRAzHs'
          width='100%'
          height='100%'
        />
    </div>
  )
};


export default VideoPlayer;