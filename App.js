import React from 'react'
import "./App.css"
import GenreFilter from './GenreFilter';

const App = () => {
    const movies = [ 
        { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, 
        { title: 'The Godfather', genre: 'Crime', year: 1972 }, 
        { title: 'The Dark Knight', genre: 'Action', year: 2008 }, 
        { title: '12 Angry Men', genre: 'Drama', year: 1957 }, 
        { title: "Schindler's List", genre: 'Drama', year: 1993 }, 
        { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 }, 
        { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, 
        { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, 
        { title: 'Inception', genre: 'Science Fiction', year: 2010 }, 
        { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, 
        { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, 
        { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, 
        { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, 
        { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, 
        { title: 'The Lion King', genre: 'Animation', year: 1994 } 
    ];
    const genres = [...new Set(movies.map(item => item.genre))];
    // console.log("genre", [genres]);

  return (
    <div className='mainContainer'>
        <h2>Top 15 Movies of All Time</h2>
        <div className='btnbox'>
        <GenreFilter genres = {genres} />
        </div>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
            {
                movies.map((items,index)=>{
                    return(
                        <tr key={index}>
                            <td>{items.title}</td>
                            <td>{items.genre}</td>
                            <td>{items.year}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default App