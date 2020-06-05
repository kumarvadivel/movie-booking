import React,{useState,useEffect,useContext} from 'react';
import {useParams} from 'react-router-dom';
import MovieService from '../Services/MovieService';
import {AuthContext} from '../Context/AuthContext';
export default function SpecificMovie(){
     const [loading, setLoading] = useState(true);
    const [movie,setmovie]=useState(null)
    const authContext=useContext(AuthContext);
   // var theateridoptionvalue=null;
   // var timingoptionvalue=null
   const [date,setdate]=useState()
    const [specifictheater,setspecifictheater]= useState(null)
    const [specifictiming,setspecifictiming]= useState(null)
    const currentuser=authContext.user
    const [theater,settheater]=useState(null)
    const [timing,settiming]=useState(null)
    const [seats,setseats]=useState(0)
    const [reservation,setreservation]=useState(null)
    const [theateroption,settheateroption]=useState()

    const {id}=useParams()
  
   useEffect(async ()=>{
        await MovieService.getSpecificmovie(id)
        .then(data=>{
            
             setmovie(data[0])
           
        })
       
        

    },[])
    useEffect(async ()=>{
         await MovieService.gettheater().then(data=>{
            settheater(data)
            console.log(data)
        })
    },[])
    useEffect(async ()=>{
         await MovieService.gettimings().then(data=>{
            settiming(data)
            console.log(data)
        })
    },[])

     function handletheaterchange(e){
        e.preventDefault();
       
       var theateridoptionvalue=e.target.value
        console.log(theateridoptionvalue)
        
        MovieService.getspecifictheater(theateridoptionvalue).then(data=>{
            setspecifictheater(data[0])
           console.log(specifictiming)
        })
        

    }
    function handletimingchange(e){
        e.preventDefault();
       
      var  timingoptionvalue=e.target.value
         MovieService.getspecifictiming(timingoptionvalue).then(data=>{
            setspecifictiming(data[0])
            
        })
        
        

    }
    function booktickets(e){
        e.preventDefault()
        //console.log(timingoptionvalue)
        if(currentuser &&movie && specifictheater && specifictiming &&seats &&date){
            const reserve={username:currentuser.username,
       movie_name:movie.movie_title,theater_name:specifictheater
       ,seats:seats,timing_name:specifictiming,totalprice:seats*specifictheater.theater_ticketprice,date:date}
       MovieService.postreservation(reserve).then(data=>{
           const {message}= data;
           console.log(message)
       })
        
        }
        else{
            console.log("errors in data")
        }
       
    }
    function increment(e){
        e.preventDefault();
        setseats(seats+1)
    }
     function decrement(e){
        e.preventDefault();
        if(seats!==0)
            setseats(seats-1)
    }
    function inputchange(e){
        e.preventDefault()
        setdate(e.target.value)
    }
    return(
        <div>
            <div ClassName="container fluid">
            <div className='col pad'>
                <h3>{movie===null?("loading"):movie.movie_title}</h3> 
            </div>
            <div className='col pad'>
                <p> <strong>Description:</strong>{movie===null?("loading"):movie.movie_description}</p>
            </div>
           
           <div className='col pad'>
                <h5><strong>Rating:</strong> {movie===null?("loading"):movie.movie_rating}</h5>
            </div>
            <div className='col pad'>
                <h6> <strong>Cast:</strong>{movie===null?("loading"):movie.movie_cast}</h6>
            </div>
            <div className='col pad'>
                <h4>Booking Details</h4>
            </div>
            <div className='col pad'>
                     <label>select theater:</label><select  name="theater"   onChangeCapture={handletheaterchange} >
                {theater===null?("loading"):theater.map(theater=><option value={theater._id}>{theater.theater_name}</option>)}
                <option value="no theater" selected>select theater</option>
            </select>
            </div>
            <div className='col pad'>
                  <label>select timing:</label><select name='timing'  onChange={handletimingchange}>
                {timing===null?("loading"):timing.map(timing=><option value={timing._id}>{timing.showtime}</option>)}
                <option value="no timing" selected>select timing</option>
            </select>
            </div>
           
            <div  className='col pad'>
                 <label><strong>seats:</strong></label>{seats}
            </div>
            <div className='col pad'>
                 <button  className="btn btn-info" onClick={increment}>add seats</button>
           <button  className="btn btn-info" onClick={decrement}>remove seats</button>
           
            </div>
            <div className='col pad'>
                 <label><strong>price<sub>(per ticket)</sub>:</strong></label>
          {specifictheater===null?0:specifictheater.theater_ticketprice}
           
            </div>
            <div className='col pad'>
                 <div><strong>total price:</strong>{specifictheater===null?0:specifictheater.theater_ticketprice*seats}</div>
           
            </div>
            <div className='col pad'>
                <input type='date' name='date' onChange={inputchange}/>
            </div>
            <div className='col pad' style={{padding:'15px 15px 15px 15px'}}>
                <button className="btn btn-info" onClick={booktickets}>book tickets</button>
        
            </div>
            
           
          
            
           
        
           

            </div>
        </div>
    )
}
