import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.contrller.js";

const router = express.Router();

//GET ALL PRODUCT ENDPOINT
router.get('/', getProducts);

//CREATE PRODUCT ENDPOINT
router.post('/', createProduct);

// UPDATE PRODUCT ENDPOINT
// PUT updates the whole object
// PATCH updates specific properties
router.put('/:id', updateProduct);

// DELETE PRODUCT ENDPOINT
router.delete('/:id', deleteProduct);

export default router;