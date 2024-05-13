import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getProductByCategory
} from "../controllers/product.controller.js";

import { auth } from "../middleware/auth.middleware.js";
import { uploads } from "../middleware/multer.js";

const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

router.post("/products", auth, uploads.single("img"), createProduct);

router.put("/products/:id", auth, updateProduct);

router.delete("/products/:id", auth, deleteProduct);

router.get('/products/category/:category', getProductByCategory);

export default router;
