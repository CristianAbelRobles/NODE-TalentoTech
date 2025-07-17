import fs from "fs";
import path from "path";
import {db} from "./data.js"
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");

const json = fs.readFileSync(jsonPath, "utf-8");

const products = JSON.parse(json);

const productsCollection = collection(db, "products")

export const getAllProducts = async () => {
  //return products;
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (data) => {
  try {
    const docRef = await addDoc(productsCollection, data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id, data) => {
  try {
    const docRef = doc(productsCollection, id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return null;
    }

    await updateDoc(docRef, data);

    return { id, ...data };
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return null;
    }

    const deletedData = { id: snapshot.id, ...snapshot.data() };
    await deleteDoc(productRef);

    return deletedData;
  } catch (error) {
    console.error("Error en deleteProduct:", error);
    throw error;
  }
};