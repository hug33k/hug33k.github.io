import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import "babel-core/register";
import App from "./js";
import css from "./style/general.less";

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
