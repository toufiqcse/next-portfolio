import { LOADED } from "./actionTypes";

export const loaded = (projectsInfo) => {
  return {
    type: LOADED,
    payload: projectsInfo,
  };
};
