import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MoviesContext } from './MoviesContext'
import { useContext } from 'react'

function ViewProduct() {
  const {id} = useParams()
  let movies = useContext(MoviesContext)
  const [movie, setMovie] = useState()

  useEffect(() => {
      setMovie(movies.filter(movie => movie.id == id)[0])
  }, [])



  return (
    <div className="view-movie">
      <div className="container">
        {
          movie &&
          <div className="row viewproduct-margin">
            <div className="col-4">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="viewproduct-img img-fluid" alt={movie.original_title} /><br></br>
            </div>
            <div className="col-8">
              <h4 className="viewproduct-title mt-3">{movie.original_title}</h4>
              <p className="viewproduct-p mt-3">{movie.overview}</p>
              <div className="row mt-5">
                <div className="col-md-3 mb-4 table-background text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" className="mt-4"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" fill="rgba(142,174,234,1)"></path></svg>
                  <h4 className="icon-title mt-4">Language</h4>
                  <p className="icon-p text-uppercase">{movie.original_language}</p>
                </div>
                <div className="col-md-3 mb-4 table-background text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" className="mt-4"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="rgba(142,174,234,1)"></path></svg>
                  <h4 className="icon-title mt-4">Popularity</h4>
                  <p className="icon-p">{movie.popularity}</p>
                </div>
                <div className="col-md-3 mb-4 table-background text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" className="mt-4"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z" fill="rgba(142,174,234,1)"></path></svg>
                  <h4 className="icon-title mt-4">Rating</h4>
                  <p className="icon-p">{movie.vote_average}</p>
                </div>
                <div className="col-md-3 mb-4 table-background text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" className="mt-4"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z" fill="rgba(142,174,234,1)"></path></svg>
                  <h4 className="icon-title mt-4">Release date</h4>
                  <p className="icon-p">{movie.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ViewProduct