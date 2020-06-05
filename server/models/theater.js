const mongoose=require('mongoose')



const Schema=mongoose.Schema;
const Theaterschema=new Schema({
    theater_name:String,
    theater_totalseats:Number,
    theater_ticketprice:Number
})

const Theatermodel =mongoose.model('Theater',Theaterschema);


module.exports=Theatermodel;