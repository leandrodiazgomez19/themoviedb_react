import React, {useState, useEffect} from 'react'
import '../css/Tv.css'

function Tv() {
  const [state, setState] = useState([])

  const getTv = async () => {
      const data = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=0f29a09a11639cfc594b796917291cf8&language=es-ES&page=1')
      const tv = await data.json()
      
      setState(tv.results)
  }   

  useEffect(() => {
      getTv()
  }, [])

  return (
    <div>
      <section className="my-4">
        <div className="container text-center">
          <h1>Series más populares</h1>
        </div>
      </section>

      <div className="container peliculas-container">
        {
          state.map(movie=>{
            return (
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3"> 
              <div className="card"> 
                <img src={'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">{movie.overview}</p>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>      
  )
}

export default Tv