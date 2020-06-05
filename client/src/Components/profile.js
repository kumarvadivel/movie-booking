import React,{useContext,useState,useEffect} from 'react';
import {AuthContext} from '../Context/AuthContext'
import MovieService from '../Services/MovieService';
export default function Profile(){
    
    
    const [username,setusername]=useState()
    const [reservation,setreservation]=useState(null)

     const authContext=useContext(AuthContext);
    useEffect(()=>{
        MovieService.getreservation().then(data=>{
            setreservation(data.todos)
            //console.log(reservation)
        })
    })

    

    return(
        <>
        <div className='container fluid'>
       <div className='col'>
           <h1>welcome,{authContext.user.username}</h1>
       </div>
       <div className='col'>
              <h1>Your Reservations</h1><br/>
        <table className="table-reservation">
            <thead>
                <tr>
                   <td>movie name</td>
                   <td>theater name</td>
                   <td>date</td>
                   <td>showtime</td>
                   <td>seats</td>
                   <td>totalprice</td>
                </tr>
            </thead>
        {
        reservation?reservation.map((i)=>
        <tr>
            <td>{i.movie_name}</td>
            <td>{i.theater_name.theater_name}</td>
            <td>{i.date.substring(0,9)}</td>
            <td>{i.timing_name.showtime}</td>
            <td>{i.seats}</td>
            <td>{i.totalprice}</td>
        </tr>):"loading0"
        }
       </table>
       </div>
     
    </div>
        </>
    )
}