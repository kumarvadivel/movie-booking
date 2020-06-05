const express=require('express');


const router=express.Router();
const timing=require('../models/timing');



router.get('/timing',(req,res)=>{
    const data=res.body
    timing.find({
        
    }).then((data)=>{
        console.log('data:',data)
        res.json(data);
    }).catch((error)=>{
        console.log('error:',error)

    })
    
});
router.get('/timing/:id',(req,res)=>{
    
    timing.find({
        _id:req.params.id
    }).then((data)=>{
        console.log('data:',data)
        res.json(data);
    }).catch((error)=>{
        console.log('error:',error)

    })
    
});


router.post('/savetiming',(req,res)=>{
 
    const Timing=new timing(req.body)

   Timing.save((error)=>{
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