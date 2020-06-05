import React,{useState} from 'react';
import AdminService from '../Services/AdminService';
import Message from '../Components/Message';
import {Form} from 'react-advanced-form'

const Admin = props=>{
     const [movievalue,setmovievalue] = useState({movie_title: "", movie_description: "",movie_cast:"",movie_rating:""});
     const [theatervalue,settheatervalue] = useState({theater_name: "", theater_totalseats: "",theater_ticketprice:""});
     const [timingvalue,settimingvalue] = useState({showtime: ""});
     const [message,setmessage]=useState(null)
    const onmoviechange = e =>{
        setmovievalue({...movievalue,[e.target.name] : e.target.value});
    }
    const ontheaterchange = e =>{
        settheatervalue({...theatervalue,[e.target.name] : e.target.value});
        
    }
    
     const ontimingchange = e =>{
        settimingvalue({...timingvalue,[e.target.name] : e.target.value});
    }
    const onmoviesubmit= e=>{
            e.preventDefault();
            AdminService.addnewmovies(movievalue).then(data=>{
                console.log(data)
                setmessage(message)
                
            })
            e.target.reset()
            

    }
    const ontheatersubmit= e=>{
        e.preventDefault();
        console.log(theatervalue)
            AdminService.addnewtheater(theatervalue).then(data=>{
                console.log(data)
            })
            e.target.reset()
    }
    const ontimingsubmit= e=>{
    e.preventDefault();
            AdminService.addnewtiming(timingvalue).then(data=>{
                console.log(data)
            })
            e.target.reset()
    }
    
 return(   
 <div className="container">
        <div className='row'>
            <div className='col'>
                <h3>Add new movies</h3>
                <form onSubmit={onmoviesubmit}>
                <table>
                

                    <tr>
                        <td><label htmlFor="movie-title">movietitle:</label></td>
                        <td><input type='text' name="movie_title" onChange={onmoviechange}/><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="movie-description">moviedescription:</label></td>
                        <td><input type='text' name="movie_description" onChange={onmoviechange}/><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="movie-cast">moviecast:</label></td>
                        <td><input type='text' name="movie_cast" onChange={onmoviechange}/><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="movie-rating">movierating:</label></td>
                        <td><input type='text' name="movie_rating" onChange={onmoviechange}/><br/></td>
                    </tr>
                    <tr >
                        <td colspan='2'><button className="btn btn-sm btn-primary btn-block" 
                        type="submit">Add Movies</button></td>
                    </tr>
                
                
                </table>
                </form>
            </div>
            <div className='col'>
                {message ? <Message message={message}/> : null}
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <h3>Add new theater</h3>
                <form onSubmit={ontheatersubmit}>
                    <table>
                        <tr>
                            <td><label htmlFor="theater_name">theater_name:</label></td>
                            <td><input type='text' name="theater_name" onChange={ontheaterchange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="theater_totalseats">theater_totalseats:</label></td>
                            <td><input type='text' name="theater_totalseats" onChange={ontheaterchange}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="theater_ticketprice">theater_ticketprice:</label></td>
                            <td><input type='text' name="theater_ticketprice" onChange={ontheaterchange}/></td>
                        </tr>
                        <tr>
                            <td colspan='2'><button className="btn btn-sm btn-primary btn-block" 
                            type="submit">Add theater </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <h3>Add new timing</h3>
                <form onSubmit={ontimingsubmit}>
                    <table>
                        <tr>
                            <td><label htmlFor="showtime">showtime:</label></td>
                            <td><input type='text' name="showtime" onChange={ontimingchange}/></td>
                        </tr>
                        <tr>
                            <td colspan='2'><button className="btn btn-sm btn-primary btn-block" 
                            type="submit">Add timing </button></td>
                        </tr>
                </table>
                
                </form>
            </div>
        </div>
    </div>
 )
}

export default Admin;