import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import MasterRoutes from "./routes/MasterRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <MasterRoutes />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
