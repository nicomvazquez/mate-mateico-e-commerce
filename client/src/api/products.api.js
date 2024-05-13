import axios from "./axios.js";

export const getProductRequest = () => {
  return axios.get("/products");
};

export const getProductByIdRequest = (id) => {
  return axios.get(`/products/${id}`);
};

export const getProductByCategoryRequest = (category) => {
  return axios.get(`/products/category/${category}`);
}

export const createProductRequest = (product) => {
  return axios.post("/products", product);
};

export const updateProductRequest = (id, product) => {
  return axios.put(`/products/${id}`, product);
};

export const deleteProductRequest = (id) => {
  return axios.delete(`/products/${id}`);
};
