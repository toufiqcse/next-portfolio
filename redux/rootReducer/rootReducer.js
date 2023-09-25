import projectReducer from "../projects/projectReducer";
import resumeReducer from "../resume/resumeReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  projects: projectReducer,
  resume: resumeReducer,
});

export default rootReducer;
