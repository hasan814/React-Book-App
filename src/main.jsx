import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import BookProvider from "./context/BookProvider.jsx";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <BookProvider>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </BookProvider>
);
