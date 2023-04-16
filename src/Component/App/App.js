import {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';
import Description from '../Description/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title:'Twilight', img:'/image/twilight.jpg', description:" Après la naissance de sa fille Renésmée, Bella s’adapte peu à peu à sa nouvelle vie de vampire avec le soutien d’Edward. Se sentant menacés par cette naissance d’un nouveau genre, les Volturi déclarent la guerre à la famille Cullen. Pour préparer leur défense, les Cullen vont parcourir le monde pour rassembler les familles de vampires alliées et tenter de repousser les Volturi lors d’un ultime affrontement..", posterURL:"https://www.themoviedb.org/t.jpg", rating:7.4},
  { title:'Cosmos', img:'/image/Cosmos.jpg', description:"An exploration of our discovery of the laws of nature and coordinates in space and time.", posterURL:"www.cosmos.com", rating:9.3 },
  { title:'MR. ROBOT', img:'/image/MR. ROBOT.jpg', description:"The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.", posterURL:"www.mrrobot.com", rating:8.5 },
  { title:'Planet Earth', img:'/image/Planet Earth.jpg', description:"Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.", posterURL:"www.planetearth.com", rating:9.4 },
  { title:'Prison Break', img:'/image/Prison Break.jpg', description:"An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.", posterURL:"www.prisonbreak.com", rating:8.3 },
  { title:'Roman Empire', img:'/image/Roman Empire.jpg', description:"Chronicles some of the most famous leaders of the Roman Civilization.", posterURL:"www.romanempire.com", rating:6.9 },
  { title:'Parasite', img:'/image/parasite.jpg', description:"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.", posterURL:"https://www.themoviedb.org/.jpg", rating:8.5 },
  { title:'The Walking Dead', img:'/image/The Walking Dead.jpg', description:"Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.", posterURL:"www.thewalkingdead.com", rating:8.2 },
];

// the App component holds the state of the movies, title filter, 
// and rating filter using the useState hook. 
// It also defines the event handlers for title and rating filter changes, 
// as well as for adding a new movie to the movies state array.

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }

  // The filteredMovies constant is used to filter the movies based on the title and rating filter values. 
  
  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
        {/* SHOW THIS TWO COMPONENTS IF WE ARE IN THE ROOT PATH */}
        <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
        {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;

