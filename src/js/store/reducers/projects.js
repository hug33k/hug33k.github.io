export default  (state=[], { type, payload }) => {
	switch (type) {
		case "PROJECTS":
			return payload;
		default:
			return state;
	}
};
