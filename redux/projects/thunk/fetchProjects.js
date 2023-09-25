import { loaded } from "../actionCreator";

const fetchProjects = async (dispatch, getState) => {
  const response = await fetch("http://localhost:3000/api/projects");
  const projects = await response.json();

  dispatch(loaded(projects));
};

export default fetchProjects;
