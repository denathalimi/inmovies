import React from 'react'
import { Link } from 'react-router-dom'

function Movie({movie}) {
  return (
    <>
    <div className="container container-movies movies">
        <div className="row mt-5">
           <div className="mb-1">
                <Link to={`/product/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie-images img-fluid" />
                </Link>
                <h4 className="movie-title mt-3">{movie.original_title}</h4>
                <p className="movie-p">{movie.overview.substr(0, 150)}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Movie