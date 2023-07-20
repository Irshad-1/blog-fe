import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../../containers/Login";
import PageNotFound from "../error-pages/PageNotFound";
import AllBlogs from "../../containers/AllBlogs";

function SiteRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/page-not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default SiteRoutes;
