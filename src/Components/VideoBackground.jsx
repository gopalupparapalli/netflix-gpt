import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "./Hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  const trailerid = useSelector((store) => store.movies?.trailervideo);

  useTrailerVideo(id);

  return (
    <div className="w-screen">
      {trailerid?.key ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailerid.key}?autoplay=1&mute=1&controls=0&showinfo=0&enablejsapi=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default VideoBackground;
