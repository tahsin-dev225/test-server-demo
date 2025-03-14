import { Router } from "express";
import { connectDB } from "../../db/db.js";
const router = Router();
const client = await connectDB();

const userCollection = client?.db('inventory-management').collection('users')



router.post('/', async(req,res)=>{
    try {
        const user = req.body;
        const query = {email : user.email};
        const axistUser = await userCollection.findOne(query)
        if(axistUser){
            return res.status(401).send({message : "User already axist"})
        }
        const result = await userCollection.insertOne(user);
        res.send(result)
    } catch (error) {
        res.send({message : "Sign up failed"})
    }
})

router.get('/', async(req,res)=>{
    const result = await userCollection.find().toArray()
    res.send(result)
})

router.get('/email/:id', (req,res)=>{
    res.json({message : "welcome user route"})
})

export const userRouter = router;