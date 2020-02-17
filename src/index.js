import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App";
import './index.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
