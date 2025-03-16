import express from 'express';
import { productSevice } from './product.service.js';
import { connectDB } from '../../db/db.js';
import validationMiddleware from '../../helper/validateJod.js';
import { productValidation } from './productValidation.js';
const router = express.Router();
const client = await connectDB()

const productCollection = client.db('inventory-management').collection('products')

router.post('/', validationMiddleware(productValidation.createValidation), productSevice.addProduct)

router.get('/',  productSevice.getProduct)

export const productRouter = router