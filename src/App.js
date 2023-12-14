import {useState} from "react"
import './App.css';
import {films} from"./data"
import MovieList from "./MovieList"
import AddMovie from "./AddMovie";
import FilterMovie from "./FilterMovie";
function App() {
  let [movies,setMovies]=useState(films)
  let[text,setText]=useState("")
  console.log(text,"helllllooo")
  const addfilm=(newf)=>{
    setMovies([...movies,newf])
  }
  return (
    <div className="App">
      <FilterMovie setText={setText} />
     <MovieList movies={movies} text={text}/>
     <AddMovie addfilm={addfilm}/>
    </div>
  );
}

export default App;
