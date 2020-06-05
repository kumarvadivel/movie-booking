const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const PORT=process.env.PORT || 5000
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/testdatabase',{useNewUrlParser : true,useUnifiedTopology: true},()=>{
    console.log('successfully connected to database');
});

const userRouter = require('./routes/User');
const movieRouter= require('./routes/movie');
const theaterRouter= require('./routes/theaterroutes');
const timingRouter= require('./routes/timingroutes');
app.use('/api',userRouter);
app.use('/api',movieRouter);
app.use('/api',theaterRouter);
app.use('/api',timingRouter);
if(process.env.NODE_ENV === 'production'){
    
}
app.listen(PORT,()=>{
    console.log('express server started');
});