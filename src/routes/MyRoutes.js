import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import EditProduct from "../components/product/EditProduct";
import ListProduct from "../components/product/ListProduct";
import DetailsPage from "../pages/DetailsPage";
import Register from "../components/autentication/Register";

const MyRoutes = () => {
  const ADMIN_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 1 },
    { link: "/edit/:id", element: <EditProduct />, id: 2 },
    { link: "/register", element: <Register />, id: 3 },
  ];

  const PUBLIC_ROUTES = [
    { link: "/", element: <ListProduct />, id: 1 },
    { link: "/details/:id", element: <DetailsPage />, id: 2 },
  ];

  return (
    <>
      <Routes>
        {ADMIN_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
        {PUBLIC_ROUTES.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
