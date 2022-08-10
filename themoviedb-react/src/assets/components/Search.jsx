import React from 'react'
import '../css/Search.css'

const Search = () => {
    return (
        <div>
            <main className="my-5">
                <div className="container container-header">
                    <div className="row container-row">
                        <div className="col-sm-12">
                            <div className="titulo">
                                <h2>Bienvenidos. </h2>
                                <h3>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</h3>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="formulario">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                                    </div>
                                </div>   
                            </div> 
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Search
