import React from "react";
import VideoItem from "./VideoItem";

import "./VideoList.css";


const getVideos = (videos, onVideoSelect) => {
  return videos.map(video => {
    return (
        <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video} />
    );
  });
};

const VideoList = ({ videos, onVideoSelect }) => {
  return <div className="ui relaxed divided list">{getVideos(videos, onVideoSelect)}</div>;
};

export default VideoList;
