import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { Api_Options } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTrailerVideo = (id) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        Api_Options
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      const filteredTrailers = json.results?.filter(
        (video) => video.type === "Trailer"
      );

      const Trailer = filteredTrailers?.length
        ? filteredTrailers[0]
        : json?.results?.[0];

      dispatch(addTrailerVideo(Trailer || {}));
    } catch (error) {
      console.error("Failed to fetch movie videos:", error);
      dispatch(addTrailerVideo(null)); // or handle the error state appropriately
    }
  };

  useEffect(() => {
    if (id) {
      getMovieVideos();
    }
  }, [id]);
};

export default useTrailerVideo;
