
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from "./layout/AppLayout";
// home
import Home from "./pages/Dashboard/Home";

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />} >
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
