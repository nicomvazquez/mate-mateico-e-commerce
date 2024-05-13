import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/category.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/categories", getCategories);

router.get("/categories/:id", getCategory);

router.post("/categories", auth, createCategory);

router.put("/categories/:id", auth, updateCategory);

router.delete("/categories/:id", auth, deleteCategory);

export default router;
