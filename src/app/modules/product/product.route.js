import express from 'express';
const router = express.Router();

router.get("/", (req,res)=>{
    res.json({message : "Welcome to product route"})
})

export const productRouter = router