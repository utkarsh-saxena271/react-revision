import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ContextsProvider from "./Context/ContextsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextsProvider>
      <ToastContainer />
      <App />
    </ContextsProvider>
  </BrowserRouter>
);
