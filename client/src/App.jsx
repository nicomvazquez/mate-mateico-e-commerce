import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import ProtectedRoutes from "./ProtectedRoutes.jsx";

import HomePage from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FinishPage from './pages/FinishPage.jsx'

import Admin from "./pages/admin/Admin.jsx";
import ProductForm from "./pages/admin/ProductForm.jsx";
import Dashboard from "./pages/admin/AdminProducts.jsx";
import CategoriesPage from "./pages/admin/AdminCategories.jsx";

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              {/* Rutas fuera del área de administración */}
              <Route path="/*" element={<HomePage />}>
                <Route index element={<ProductsPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="product/:id" element={<ProductPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<FinishPage />} />
              </Route>

              {/* Rutas dentro del área de administración */}
              <Route element={<ProtectedRoutes />}>
                <Route path="/admin/*" element={<Admin />}>
                  <Route index element={<Dashboard />} />
                  <Route path="new" element={<ProductForm />} />
                  <Route path="edit/:id" element={<ProductForm />} />
                  <Route path="product/:id" element={<ProductPage />} />
                  <Route path="categories" element={<CategoriesPage />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
