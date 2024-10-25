import { combineReducers } from "redux";

const sampleReducer = (state = { value: 0 }, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;
