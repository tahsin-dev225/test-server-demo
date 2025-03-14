import catchAsync from "../../catchAsyck.js";
import { connectDB } from "../../db/db.js";

const client = await connectDB()
const productCollection = client.db('inventory-management').collection('products')

const addProduct = catchAsync(async (req,res)=>{
    const product = req.body;
        const newName = product.name;
        const query = {name : newName}
        const matchedName = await productCollection.findOne(query)
        if(matchedName){
            return res.status(409).send({message : "This product name exist name should be uniqe."})
        }
        const result = await productCollection.insertOne(product)
        res.send(result)
})

const getProduct = catchAsync(async (req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const currentPage = page -1 ;
    const search = req.query?.search;
    const query = {}

    const total = await productCollection.countDocuments(query)
    if(search){
       query.name=search;
    }
    const result = await productCollection.find(query)
    .skip(currentPage * size)
    .limit(size)
    .toArray();

    res.send({result,metaData:{
        currentPage : page,
        pageSize : page,
        totalItem : total,
    }});
  })

export const productSevice = {
    addProduct,
    getProduct
}