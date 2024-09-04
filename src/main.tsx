import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";

function RegrasConvivencia() {
  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/15YiCbPBtIIN-4P_dQlggYwTKtKAEQ1HR/view?usp=sharing";
  }, []);

  return <></>;
}

function Cadastro() {
  useEffect(() => {
    window.location.href = "https://forms.gle/n3hrq8UwQ7tTnmHZ9";
  }, []);

  return <></>;
}

function Instagram() {
  useEffect(() => {
    window.location.href = "https://instagram.com/blitz_volleyball";
  }, []);

  return <></>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<Home />}>
      <Route
        path="/regras-de-convivencia"
        element={<RegrasConvivencia />}
      ></Route>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/instagram" element={<Instagram />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
