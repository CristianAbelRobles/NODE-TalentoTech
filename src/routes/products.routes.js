import { Router } from "express";
import { getAllProducts, getProductById, searchProduct, createProduct, deleteProduct, updateProduct } from "../controllers/products.controller.js";

const router = Router();

router.get('/products', getAllProducts);
router.get('/products/search', searchProduct);
router.get('/products/:id', getProductById);

router.post("/products", createProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);

export default router;
