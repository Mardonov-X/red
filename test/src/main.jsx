import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap your app in the Provider */}
    {/* The store we defined earlier */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)