import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../src/pages/Home'

export function Router() {
   return(
       <BrowserRouter>
        <Routes>
           <Route element={<Home />}  path="/" />
        </Routes>
       </BrowserRouter>
   )
}