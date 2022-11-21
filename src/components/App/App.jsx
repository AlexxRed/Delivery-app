import './App.css';
import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom";
import { refs } from "../../services/refs";
import { infoStyle } from "../../services/userInformator";
import Layout from "../Layout/Layout";
import PublicRoute from "../../pages/PublicRoute/PublicRoute";
import PrivateRoute from "../../pages/PrivateRoute/PrivateRoute"
import { Loader } from "../Loader/Loader"
// import { useEffect } from 'react';
infoStyle();

const HomePage = lazy(() => import("../../pages/HomePage/HomePage" /* webpackChunkName: "home-page" */));
const ShopsPage = lazy(() => import("../../pages/ShopsPage/ShopsPage" /* webpackChunkName: "shops-page" */));
const ShoppingCartPage = lazy(() => import("../../pages/ShoppingCartPage/ShoppingCartPage" /* webpackChunkName: "cart-page" */));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage" /* webpackChunkName: "register-page" */));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"/* webpackChunkName: "login-page" */));
const OnDelivery = lazy(() => import("../../pages/OnDelivery/OnDelivery" /* webpackChunkName: "on-delivery" */));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage" /* webpackChunkName: "not-found" */));

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>

          <Routes>

          <Route path={refs.layout} element={<Layout />}>
            <Route index element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            } />
            <Route path={refs.shopsPage} element={
              <PrivateRoute>
                <ShopsPage />
              </PrivateRoute>
            } />
            <Route path={refs.shoppingCartPage} element={
              <PrivateRoute>
                <ShoppingCartPage />
              </PrivateRoute>
            } />
            <Route path={refs.notFoundPage} element={<NotFoundPage />} />
            <Route path={refs.onDelivery} element={
              <PrivateRoute>
                <OnDelivery />
              </PrivateRoute>
            } /> 
          </Route>

          <Route
              path={refs.registerPage}
              element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
              }
          />
          
          <Route
              path={refs.loginPage}
              element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
          />

        </Routes>
      </Suspense>
    </>
  )
}

export default App;
