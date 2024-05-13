import { Router } from "express";
import {
  registerSale,
  updateSale,
  getSale,
  getSales,
} from "../controllers/sales.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/sales", auth, getSales);

router.get("/sales/:id", auth, getSale);

router.post("/sales", registerSale);

router.put("/sales/:id", auth, updateSale);

export default router;
