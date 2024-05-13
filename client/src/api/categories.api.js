import axios from "./axios.js";

export const getCategoriesRequest = () => {
  return axios.get("/categories");
};

export const getCategoryRequest = (id) => {
  return axios.get(`/categories/${id}`);
};

export const createCategoryRequest = (category) => {
  return axios.post("/categories", category);
};

export const updateCategoryRequest = (id, category) => {
  return axios.put(`/categories/${id}`, category);
};

export const deleteCategoryRequest = (id) => {
  return axios.delete(`/categories/${id}`);
};
