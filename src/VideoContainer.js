import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "./const";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  console.log("INFO", info);
  if (!info) {
    return null;
  }
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { likeCount, viewCount } = statistics;
  return (
    <div className="w-96 p-2">
      <img className="rounded-lg " src={thumbnails.medium.url} />
      <h1>{title}</h1>
      <h1 className="text-gray-600">{channelTitle}</h1>
      <div className="flex">
        <h1>{likeCount} Likes</h1> &nbsp; . &nbsp;<h1>{viewCount} Views</h1>
      </div>
    </div>
  );
};

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log("JSON", json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap justify-between">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
