import axios from 'axios'
import React, { useEffect, useState } from 'react'
import endpoints from '../services/Movieservices';

const Hero = () => {
    const [movie,setmovie] = useState({});
    useEffect(() => {
        axios.get(endpoints.popular)
            .then((response) => {
                const movies = response.data.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setmovie(randomMovie);
                console.log(Math.floor(Math.random() * movies.length));
            })
            .catch((error) => {
                console.error("Axios error:", error);
            });
    }, []);

    if (!movie)
    return (
      <>
      <p>fetching movie</p>
      </>
);
const {title, backdrop_path, release_date,} = movie
    
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
    </div>
  )
}

export default Hero