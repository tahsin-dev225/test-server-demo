import catchAsync from "../../catchAsyck"
import { connectDB } from "../../db/db"

const client = await connectDB()
const userCollection = client.db('inventory-management').collection('users')

const addUser = catchAsync(async(req,res)=>{
    const user = req.body;
    const query = {email : user.email};
    const axistUser = await userCollection.findOne(query)
    if(axistUser){
        return res.status(401).send({message : "User already axist"})
    }
    const result = await userCollection.insertOne(user);
    res.send(result)
})

export const userService = {
    addUser
}