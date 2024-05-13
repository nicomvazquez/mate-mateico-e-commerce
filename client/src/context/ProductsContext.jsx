import { useContext, createContext, useEffect, useState } from "react";

import {
  createProductRequest,
  deleteProductRequest,
  getProductByIdRequest,
  getProductRequest,
  getProductByCategoryRequest,
  updateProductRequest,
} from "../api/products.api.js";

import {
  createCategoryRequest,
  deleteCategoryRequest,
  getCategoriesRequest,
  getCategoryRequest,
  updateCategoryRequest,
} from "../api/categories.api.js";

export const productsContext = createContext();

export const useProducts = () => {
  const context = useContext(productsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductRequest();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategoriesRequest();
        setCategories(response.data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  const getProducts = async () => {
    try {
      const response = await getProductRequest();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      setProducts([res.data, ...products]);
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status == 200)
        setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductRequest(id, product);
      setProducts(
        products.map((product) => (product._id === id ? res.data : product))
      );
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const getProductById = async (id) => {
    try {
      const res = await getProductByIdRequest(id);
      return res.data;
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const getProductByCategory = async (category) => {
    try {
      const res = await getProductByCategoryRequest(category);
      console.log(res)
      setProducts(res.data)
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const getCategories = async () => {
    try {
      const res = await getCategoriesRequest();
      setCategories(res.data);
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const createCategory = async (category) => {
    try {
      const res = await createCategoryRequest(category);
      setCategories([res.data, ...categories]);
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await deleteCategoryRequest(id);
      if (res.status == 200)
        setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const updateCategory = async (id, category) => {
    try {
      const res = await updateCategoryRequest(id, category);
      setCategories(
        categories.map((category) =>
          category._id === id ? res.data : category
        )
      );
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  return (
    <productsContext.Provider
      value={{
        products,
        setProducts,
        error,
        getProducts,
        createProduct,
        deleteProduct,
        updateProduct,
        getProductById,
        getProductByCategory,
        getCategories,
        createCategory,
        deleteCategory,
        updateCategory,
        categories,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
