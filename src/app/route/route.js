import express from 'express';
import { userRouter } from '../modules/user/user.route.js';
import { productRouter } from '../modules/product/product.route.js';

const router = express.Router();

const routes = [
    {
        path : "/users",
        route: userRouter
    },
    {
        path : "/products",
        route: productRouter
    },
]

routes.forEach((route )=>{
    router.use(route.path,route.route)
})

export default router