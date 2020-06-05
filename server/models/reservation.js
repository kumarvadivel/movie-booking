const mongoose=require('mongoose')



const Schema=mongoose.Schema;
const Reservationschema=new Schema({
    movie_name:{
        type: String
    },

    theater_name:{
        type: Object
    },
    timing_name:{
        type:Object
    },
    username:String,
    seats:Number,
    date:Date,
    totalprice:Number,
    phone:Number
})

const Reservationmodel =mongoose.model('reservation',Reservationschema);


module.exports=Reservationmodel;