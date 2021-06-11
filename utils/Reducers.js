const setStateAndLocStorage = (currentState) => {
  localStorage.setItem("state", JSON.stringify(currentState));
  return currentState;
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "pageincrement":
      return setStateAndLocStorage({
        ...state,
        pageView: state.pageView + action.count,
      });
    case "increment":
      return setStateAndLocStorage({
        ...state,
        count: state.count + 1,
        message: action.message,
      });
    case "decrement":
      return setStateAndLocStorage({
        ...state,
        count: state.count - 1,
        message: action.message,
      });
    case "reset":
      return setStateAndLocStorage({
        ...state,
        count: 0,
        message: action.message,
      });
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default Reducer;
