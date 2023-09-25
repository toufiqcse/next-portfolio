import { LOADED } from "./actionTypes";
import initialState from "./initialStateProjects";

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    default:
      return state;
  }
};
export default projectReducer;
