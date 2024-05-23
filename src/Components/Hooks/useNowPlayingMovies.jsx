import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { Api_Options } from "../utils/constants";

const useNowPlayingMovies=()=>{
    
        const dispatch=useDispatch();

        const fetchNowPlaying= async()=>{
          const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', Api_Options);
        
          const json=await data.json();
        
        dispatch(addNowPlayingMovies(json.results))
        
        
        }
        
        useEffect(()=>{
          fetchNowPlaying();
        },[]);

}

export default useNowPlayingMovies;