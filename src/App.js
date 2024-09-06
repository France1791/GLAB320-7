import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// Import our components
import MovieDisplay from "./Components/MovieDisplay";
import Form from "./Components/Form";


export default function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    try{
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
   
  };

   // This will run on the first render but not on subsquent renders
   useEffect(() => {
    getMovie("Clueless");
  }, []);
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>
  );
}


