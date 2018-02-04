export default  (state=[], { type, payload }) => {
	switch (type) {
		case "SOCIAL":
			return payload;
		default:
			return state;
	}
};
