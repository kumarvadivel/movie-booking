export default {
    getmovies : ()=>{
        return fetch('/api/movies')
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    getSpecificmovie: (id)=>{
        const path='/api/movies/'+id;
         return fetch(path)
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    postreservation:(data)=>{
      return fetch('/api/reservation',{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                 'Content-Type' : 'application/json'
            }
        }).then(res =>res.json())
        .then(data=>data);

    },getreservation:()=>{
      return fetch('/api/reservations').then(res =>res.json())
        .then(data=>data);

    },
    gettimings:()=>{
         return fetch('/api/timing')
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    gettheater:()=>{
        return fetch('/api/theater')
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    getspecifictheater:(id)=>{
        return fetch('/api/theater/'+id)
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    getspecifictiming:(id)=>{
        return fetch('/api/timing/'+id)
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    }

}