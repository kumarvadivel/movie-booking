import React, {useState,useContext,useEffect} from 'react';
import TodoItem from './TodoItem';
import MovieService from '../Services/MovieService';

import { AuthContext } from '../Context/AuthContext';

const Movie = props =>{
    const [movielist,setmovielist]=useState(null)
    useEffect(async ()=>{
       await MovieService.getmovies().then(data=>{
            
            setmovielist(data)
           console.log(movielist)
        })
    },[]);

   
     

    return(
        <div>
            {movielist===null?("loading"):movielist.length===0?("no movies to show"):movielist.map(movies=>(
                <div class="jumbotron">
                        <h1 class="display-4">{movies.movie_title}</h1>
                        <h6 class="display">{movies.movie_rating}</h6>
                        <p class="lead">{movies.movie_description}</p>
                        <hr class="my-4"/>
                        <p>{movies.movie_cast}</p>
                        <a class="btn btn-primary btn-lg" href={"movies/"+movies._id} role="button">Book Tickets</a>
                </div>
            ))}

        </div>
    );

}

export default Movie;