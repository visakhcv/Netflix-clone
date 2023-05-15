import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instanceconfig'


function Banner() {
  const [movies,setmovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original";
    const fetchdata= async ()=>{
        const response=await instance.get(requests.fetchNetflixOriginals)
        // console.log(response.data);
        const {results}= response.data
        setmovies(results[
          Math.floor(Math.random()*results.length)
        ]);
    }
 console.log(movies);
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className="banner" style={{backgroundImage: `url(${base_url}${movies?.backdrop_path})`,
    backgroundSize:'cover'
    }}>
      <div className="banner_text">
        <h1 className="banner_title">
          {movies?.name||movies?.title}
        </h1>
        <h2 className="banner_desc">
            {movies?.overview}
        </h2>

      </div>
    </div>
  )
}

export default Banner