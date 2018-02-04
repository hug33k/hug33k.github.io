export default  (state=[], { type, payload }) => {
	switch (type) {
		case "ME":
			return payload;
		default:
			return state;
	}
};
