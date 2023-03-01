import React, { Suspense } from "react";

// helpers
import "./internationalization/i18n";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";

// components
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";

// styles
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </>
);
