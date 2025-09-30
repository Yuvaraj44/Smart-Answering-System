import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "../Components/Homes";
import Abouts from "../Components/Abouts";
import Main from "../Main/Main";

function Approuter() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route  element={<Main />}>
            <Route path="/" element={<Homes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Approuter;
