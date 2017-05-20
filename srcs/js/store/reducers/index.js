import {combineReducers} from "redux";

const main = (state={}, { type, payload }) => {
	switch (type) {
		default:
			return state || payload;
	}
};

export default combineReducers({
	main
});
