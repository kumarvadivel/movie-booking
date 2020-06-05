const mongoose=require('mongoose')



const Schema=mongoose.Schema;
const Movieschema=new Schema({
    movie_title:String,
    movie_description:String,
    movie_cast:String,
    movie_rating:String,
    
})

const Moviemodel =mongoose.model('Movies',Movieschema);


module.exports=Moviemodel;