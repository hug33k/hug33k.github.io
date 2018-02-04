export default  (state=[], { type, payload }) => {
	switch (type) {
		case "GROUPS":
			return payload;
		default:
			return state;
	}
};
