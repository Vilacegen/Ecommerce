import express, { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { OrderModel } from "../models/orderModel";
import { Product } from "../models/productModel";
import { isAuth } from "../utils";

// Extend Request interface to include user
interface AuthRequest extends Request {
  user?: {
    _id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  };
}

export const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  asyncHandler(async (req: AuthRequest, res: Response): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    if (req.body.orderItems.length === 0) {
      res.status(400).json({ message: "Cart is empty" });
      return;
    }

    const createdOrder = await OrderModel.create({
      orderItems: req.body.orderItems.map((x: Product) => ({
        ...x,
        product: x._id,
      })),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });

    res.status(201).json({ message: "Order Made", order: createdOrder });
  })
);
