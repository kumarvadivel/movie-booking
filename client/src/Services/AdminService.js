export default{
    addnewmovies: movievalue=>{
        return fetch('/api/savemovies',{
            method:'post',
            body:JSON.stringify(movievalue),
            headers:{
                 'Content-Type' : 'application/json'
            }
        }).then(res =>res.json())
        .then(data=>data);
    },
    addnewtheater: theatervalue=>{
        return fetch('/api/savetheater',{
            method:'post',
            body:JSON.stringify(theatervalue),
            headers:{
                 'Content-Type' : 'application/json'
            }
        }).then(res =>res.json())
        .then(data=>data);
       
    },
    addnewtiming:timingvalue=>{
         return fetch('/api/savetiming',{
            method:'post',
            body:JSON.stringify(timingvalue),
            headers:{
                 'Content-Type' : 'application/json'
            }
        }).then(res =>res.json())
        .then(data=>data);
       
    }
}