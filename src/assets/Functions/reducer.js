import evaluate from "./evaluateFunc";
import { ACTIONS } from "../../Calculator";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overWrite) {
        return {
          ...state,
          currentOperand: payload,
          overWrite: false,
        };
      }
      if (payload === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state).toString(),
        operation: payload,
        currentOperand: null,
      };

    case ACTIONS.EVALUATE:
      if (state.previousOperand == null && state.currentOperand == null) {
        return state;
      }
      if (state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          currentOperand: state.previousOperand,
          operation: null,
          previousOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: evaluate(state).toString(),
        operation: null,
        previousOperand: null,
        overWrite: true,
      };

    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand != null) {
        if (state.currentOperand.length === 1) {
          return { ...state, currentOperand: null };
        }
        return { ...state, currentOperand: state.currentOperand.slice(0, -1) };
      }
      if (state.currentOperand == null && state.previousOperand != null) {
        return {
          ...state,
          currentOperand: state.previousOperand,
          previousOperand: null,
          operation: null,
        };
      }
      return state;
  }
};

export default reducer;
