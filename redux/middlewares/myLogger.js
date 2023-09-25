import rootReducer from "../rootReducer/rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action : ${JSON.stringify(action)}`);
  console.log(`Before : ${JSON.stringify(store.getState())}`);

  //   upcomming state

  //   pass the action
  next(action);
};

export default myLogger;
