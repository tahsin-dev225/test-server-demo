import { Router } from "express";
import { connectDB } from "../../db/db.js";
import { userService } from "./user.service.js";
const router = Router();
const client = await connectDB();

const userCollection = client?.db('inventory-management').collection('users')



router.post('/', userService.addUser)

router.get('/', async(req,res)=>{
    const result = await userCollection.find().toArray()
    res.send(result)
})

router.get('/email/:id', (req,res)=>{
    res.json({message : "welcome user route"})
})

export const userRouter = router;