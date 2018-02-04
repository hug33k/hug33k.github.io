import {combineReducers} from "redux";
import social from "./social";
import documents from "./documents";
import me from "./me";
import projects from "./projects";
import groups from "./groups";

export default combineReducers({
	social,
	documents,
	me,
	projects,
	groups
});
