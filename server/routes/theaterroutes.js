const express=require('express');


const router=express.Router();
const theater=require('../models/theater');



router.get('/theater',(req,res)=>{
    
    theater.find({
        
    }).then((data)=>{
        console.log('data:',data)
        res.json(data);
    }).catch((error)=>{
        console.log('error:',error)

    })
    
});
router.get('/theater/:id',(req,res)=>{
    
    theater.find({
        _id:req.params.id
    }).then((data)=>{
        console.log('data:',data)
        res.json(data);
    }).catch((error)=>{
        console.log('error:',error)

    })
    
});


router.post('/savetheater',(req,res)=>{
    
    const Theater=new theater(req.body)

   Theater.save((error)=>{
       if(error){
            res.status(500).json({msg:'sorry intrenal error'})
            return
       }else{
         return  res.status(200).json({
               msg:'your data saved'
           })
       }
   })
    
});


module.exports=router