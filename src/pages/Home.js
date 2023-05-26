import React, { useContext, useState } from 'react'
import { MoviesContext } from './MoviesContext'
import Movie from '../components/Movie'

function Home({}) {
  let movies = useContext(MoviesContext)
  movies = movies.slice(0, 16)

  return (
    <>
    <section className="products">
      <div className="container">
        <div className="row">
          {movies && movies.map(movie => (
            <div className="col-3">
              <Movie movie={movie} />
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}

export default Home