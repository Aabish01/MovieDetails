import React from 'react'
import "./MovieCard.css"

const MovieCard = ({movie}) => {
  return (
    <div className='movieCard'>
        <div className='image'>
            <img src={movie.image} alt={movie.image}/>
        </div>
        <div className='text'>
            <p>Name : {movie.title}</p>
            <p>Timeline : {movie.timeline}</p>
            <p>Ratings : {movie.rating}</p>
            <p>Year : {movie.year}</p>
        </div>
    </div>
  )
}



export default MovieCard