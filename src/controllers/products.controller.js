import * as model from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await model.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await model.getProductById(id);

    if (!product) {
      return res.status(404).json({ error: "No existe el producto" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const searchProduct = async (req, res) => {
  try {
    const { name } = req.query;
    const products = await model.getAllProducts();

    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(filteredProducts);
  } catch (error) {
    console.error("Error al buscar producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, category } = req.body;

  const newProduct = await model.createProduct({ name, price, category });

  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await model.deleteProduct(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({
      message: "Producto eliminado correctamente",
      product: {
        id: deletedProduct.id,
        name: deletedProduct.name || deletedProduct.title || "(sin nombre)"
      }
    });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;

    const updatedProduct = await model.updateProduct(id, { name, price, category });

    if (!updatedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};