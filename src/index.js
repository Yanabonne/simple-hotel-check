import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { images, ImagesContext } from "./contexts/Images-swiper";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ImagesContext.Provider value={images}>
          <App />
        </ImagesContext.Provider>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
