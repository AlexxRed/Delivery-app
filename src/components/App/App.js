import './App.css';
import { Routes, Route } from "react-router-dom";
import { refs } from "../../services/refs";
import { infoStyle } from "../../services/userInformator";
// import PrivateRoute from "../../pages/PrivateRoute/PrivateRoute";
// import PublicRoute from "../../pages/PublicRoute/PublicRoute";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import ShopsPage from "../../pages/ShopsPage/ShopsPage";
import ShoppingCartPage from "../../pages/ShoppingCartPage/ShoppingCartPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
infoStyle();


function App() {
  return (
    <>
      <Routes>
        <Route path={refs.layout} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={refs.shopsPage} element={<ShopsPage />} />
          <Route path={refs.shoppingCartPage} element={<ShoppingCartPage />} />
          <Route
            path={refs.registerPage}
            element={

              <RegisterPage />
            
            }
          />
          <Route
            path={refs.loginPage}
              element={
                
                  <LoginPage />

              }
          />
          <Route path={refs.notFoundPage} element={<NotFoundPage/>}/> 
        </Route>
      </Routes>
    </>
  )
}

export default App;
