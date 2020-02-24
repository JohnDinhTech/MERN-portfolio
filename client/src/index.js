import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import PreLoader from "./components/layout/PreLoader/preLoader.component";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<Provider store={store}>
		<PreLoader />
		<App />
	</Provider>,
	document.getElementById("root")
);
