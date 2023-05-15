import React, { useEffect, useState } from 'react'
import instance from '../instanceconfig'
import './Row.css';

function Row({isposter,title,fetchUrl}) {

    const base_url = "https://image.tmdb.org/t/p/original/";

    const [movies,setmovies]= useState([])
   const fetchdata= async ()=>{
        const response= await instance.get(fetchUrl)
        // console.log(response.data);
        const {results}= response.data
        console.log(results);
        setmovies(results)
   }

   useEffect(()=>{
    fetchdata()
   },[])
  return (
    <div className='row'>
    <h2>{title}</h2> 
    <div className="movies-row">
        {
        movies.map((movie)=>(
            <img className={`movie ${isposter}&& poster`} src={`${base_url}/${isposter?movie?.poster_path:movie?.backdrop_path}`} alt="movie img" />
        ) )
}
    </div>
    </div>
  ) 
}

export default Row