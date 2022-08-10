import React, {useState, useEffect} from 'react'
import '../css/People.css'

function People() {
  const [state, setState] = useState([])

  const getPeople = async () => {
      const data = await fetch('https://api.themoviedb.org/3/person/popular?api_key=0f29a09a11639cfc594b796917291cf8&language=es-ES&page=1')
      const people = await data.json()
      
      setState(people.results)
  }   

  useEffect(() => {
      getPeople()
  }, [])

  return (
    <div>
      <section className="my-4">
        <div className="container text-center">
          <h1>Personas más populares</h1>
        </div>
      </section>

      <div className="container peliculas-container">
        {
          state.map(people=>{
              console.log(people)
            return (
              <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3"> 
              <div className="card"> 
                <img src={'https://image.tmdb.org/t/p/w500/' + people.profile_path} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{people.name}</h5>
                  <p className="card-text"></p>
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

export default People

