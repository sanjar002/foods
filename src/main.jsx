import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

let root = document.getElementById("root");
createRoot(root).render(
 <Provider store={store}>
  <App />
 </Provider>
);
