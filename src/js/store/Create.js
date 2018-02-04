import { createStore, compose } from "redux";
import Reducers from "./reducers";
import social from "../data/social.json";
import documents from "../data/documents.json";
import me from "../data/me.json";
import projects from "../data/projects.json";

export default (initialState = {}) => {

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	let init = {
		...initialState,
		...social,
		...documents,
		...me,
		...projects
	};

	return createStore(
		Reducers,
		init,
		composeEnhancers(),
	);
};
