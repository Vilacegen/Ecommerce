import express from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../models/productModel";

export const productRouter = express.Router();

// /api/products
productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    console.log("Received request for all products");
    try {
      const products = await ProductModel.find();
      console.log("Products fetched:", products);
      res.json(products);
    } catch (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  })
);

// /api/slug/:slug
productRouter.get(
  "/slug/:slug",
  asyncHandler(async (req, res) => {
    console.log(`Received request for product with slug: ${req.params.slug}`);
    try {
      const product = await ProductModel.findOne({ slug: req.params.slug });
      if (product) {
        console.log("Product found:", product);
        res.json(product);
      } else {
        console.log("Product not found");
        res.status(404).json({ message: "Product Not Found" });
      }
    } catch (err) {
      console.error("Error fetching product:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  })
);
