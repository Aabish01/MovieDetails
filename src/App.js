import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import "./App.css"
import MovieCard from './Components/MovieCard';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://moviesverse1.p.rapidapi.com/top-250-movies/',
          headers: {
            'X-RapidAPI-Key': /*'6551d1c884msh5871aaddbe37f68p1120a0jsn0aaa8f6f47ce'*/'cb12cdacacmsha0050f04cc379afp17cc16jsnee295249169e',
            'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
          }
        };
  
        const response = await axios.request(options);
        setMovies(response.data.movies);
        setFilteredMovies(response.data.movies); // Initialize filteredMovies with all movies
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const searchHandler = () => {
    // Filter movies based on the search term
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(filteredMovies.length === 0)
    {
      alert("No such  Movie found")
    }
    setFilteredMovies(filteredMovies);
  };

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <div className='heading'>Movie Search</div>
          <div className='searchbar'>  
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search.."
            />
            <input
              type="submit"
              value="Submit"
              onClick={searchHandler}
            />
          </div>
          <div className='main'>
            {filteredMovies.length !== 0 ? filteredMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            )) : movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
