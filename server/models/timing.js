const mongoose=require('mongoose')



const Schema=mongoose.Schema;
const Timingschema=new Schema({
    showtime:String,
    
})

const Timingmodel =mongoose.model('Timings',Timingschema);


module.exports=Timingmodel;