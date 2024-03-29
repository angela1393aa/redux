import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// 引入 react-redux 的 Provider//提供給所有 component 來使用
import { Provider } from "react-redux";
// 引入剛才定義好的 store
import store from "./features/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
