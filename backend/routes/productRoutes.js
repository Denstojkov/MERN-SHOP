import express from "express"
import AsyncHandler from "express-async-handler";
const router = express.Router()
import Product from "../models/productModel.js"

//  @desc Fetch all Products
//  @route GET /apu/products
//  @access Public
router.get("/", AsyncHandler( async (req,res) =>{
    const products = await Product.find({})

    res.json(products)
}))

//  @desc Fetch single Product
//  @route GET /apu/products/:id
//  @access Public
router.get("/:id", AsyncHandler(async (req,res) =>{
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(400).json({ message: "Product not found"})
    }
    res.json(product);
}))

export default router