import { Router } from "express";
const router = Router();

router.get('/',(req,res)=>{
    res.json({message : "Welcome user route"})
})

router.post('/', (req,res)=>{
    res.json({message : 'welcome to user route '})
})

router.get('/email/:id', (req,res)=>{
    res.json({message : "welcome user route"})
})

export const userRouter = router;