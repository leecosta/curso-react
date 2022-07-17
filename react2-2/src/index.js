import React from "react";
import ReactDOM from "react-dom";

// Chamar classe de rota
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Está chamando apenas está função, não o arquivo inteiro
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
