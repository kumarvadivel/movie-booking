const express=require('express');


const router=express.Router();
const movie=require('../models/movie');



router.get('/movies',(req,res)=>{
    
    movie.find({
        
    }).then((data)=>{
        console.log('data:',data)
        res.json(data);
    }).catch((error)=>{
        console.log('error:',error)

    })
    
});
router.get('/movies/:id',(req,res)=>{
    
    movie.find({
        _id:req.params.id
    }).then((data)=>{
        console.log('data:',data)
        res.json(data);
    }).catch((error)=>{
        console.log('error:',error)

    })
    
});


router.post('/savemovies',(req,res)=>{
   
        
    const Movie=new movie(req.body)

   Movie.save((error)=>{
       if(error){
            res.status(500).json({msg:'sorry intrenal error'})
            return;
       }else{
         return  res.status(200).json({
               msg:"data s saved"
           })
       }
   })
    
});



module.exports=router