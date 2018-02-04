import create from "./Create";

export default {
	create,
	get: function() {
		return create().getState();
	}
};
