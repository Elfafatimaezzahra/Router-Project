import "./description.css";
import {Link, useParams} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

export default function Description({list}) {

    console.log(list.length);
    let params = useParams();
    return (
        <div className="descri">
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this id </p> :
            
            <div className="desc">
            <MovieCard ele={list[params.id]} /> 
            <iframe width="700" height="500" src={list[params.id].trailer}
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
                
            </div>
            }
            <Link className="back" to="/">Back to Home</Link>
        </div>
    )
}
