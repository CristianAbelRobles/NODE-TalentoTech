import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { getAllProducts, getProductById, searchProduct, createProduct, deleteProduct, updateProduct } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProduct);
router.get('/products/:id', getProductById);

router.post("/products", auth, createProduct);

router.delete("/products/:id", auth, deleteProduct);

router.put("/products/:id", auth, updateProduct);

export default router;
