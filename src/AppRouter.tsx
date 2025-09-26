import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pageRouteList } from "./constants";

export const Router = () => (
  <Routes>
    {pageRouteList.map((route, k) => (
      <Route key={k} path={route.path} element={<route.component />} />
    ))}
  </Routes>
);

export default () => (
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <Router />
    </Suspense>
  </BrowserRouter>
);
