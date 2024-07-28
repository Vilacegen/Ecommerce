import express from "express";

export const keyRouter = express.Router();
// /api/keys/paypal
keyRouter.get("/paypal", (req, res) => {
  res.json({
    clientId:
      process.env.PAYPAL_CLIENT_ID ||
      "AZ1xGpThUu-7y8gdE44UH1Meqd162q4rj8hJknYirglaJP4UlvD8qY5bn9E_zb9vijzM3FIUKvLuKWHB",
  });
});
