import React from 'react'
import "./App.css"

const GenreFilter = ( {genres} ) => {
    // console.log("genre", genres);
    function handleclick(e){
        console.log("Filtering by",e.target.value);
    }
 
  return (
    <div className='btnbox'>
        <h3>Filter by Genre</h3>
        <div  className='container'>
        {genres.map((item,index)=>{
            return(
                <button key = {index} value = {item} onClick={handleclick}>{item}</button>
            )
        })}
        </div>
    </div>
  )
}

export default GenreFilter