import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/Store.js";
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
