import { z } from "zod"

const createValidation=z.object({
    name:z.string(),
    price:z.number({ required_error: "Price is required" }).positive("Price must be a positive number"),
    quantity:z.number(),
    description:z.string(),
    image : z.string(),
   })
   export const productValidation={
    createValidation
}