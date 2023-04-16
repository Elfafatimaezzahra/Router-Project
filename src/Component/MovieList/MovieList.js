import "./movielist.css";
import MovieCard from "../MovieCard/MovieCard";

// the MovieList and Filter components are rendered with the filtered movies and event handlers respectively, 
// along with a button to add a new movie to the state.

function MovieList({list}){
    return(
        <div className="MovieList">{
        list.map( (ele,index)=>(
            <MovieCard key={index} ele={ele} />
        ))
        }
        </div>
    );
}

export default MovieList;