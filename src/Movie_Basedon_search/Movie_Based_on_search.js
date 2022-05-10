import React, { useEffect, useState } from 'react'

function Movie_Based_on_search() {

    const [movie,setMovie] = useState("")
    const [data,setData] = useState("")

    const searchit = (e)=>{
        e.preventDefault()
        setMovie(movie)

    }

    useEffect(async () =>{
        const response = await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=9bf543be`)
        const moviename = await response.json()
        setData(moviename.Search)
    },[movie]) 
        

    const download = url => {
        fetch(url).then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png");
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
  return (
        <div>
            <center>
            <form onSubmit={searchit}>   
                <h1>Search for Movie</h1>
                <input type="text" onChange={(e)=>{setMovie(e.target.value)}}  value={movie}/><br/><br/>
                <button type='submit' className="w-5 h-25btn btn-primary">SEARCH</button>
            </form>
            <div className='row'>
            {
                data?.length >=1 && data?.map((movie)=>(
                    <div className='col-md-3' key={movie.imdbID}>
                        <div className="card" style={{"width": "18rem"}}>
                            <h1>{movie.Type} : {movie.Year}</h1>
                            <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
                            <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <input className=" w-75 h-25 btn btn-primary" type="button" value="Movie Poster" onClick={()=>download(movie.Poster)} />
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            </center>     
        </div>
  )
}


export default Movie_Based_on_search