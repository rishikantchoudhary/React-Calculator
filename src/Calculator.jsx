import { useReducer } from "react";
import "./index.css";

import AddDigitButton from "./assets/Components/AddDigitButton";
import OperationButton from "./assets/Components/OperationButton";

import reducer from "./assets/Functions/reducer";
import formatNumber from "./assets/Functions/formatNumberFunc";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className='container'>
      <div className='display'>
        <div className='previous-operand'>
          {formatNumber(previousOperand)} {operation}
        </div>
        <div className='current-operand'>{formatNumber(currentOperand)}</div>
      </div>
      <div className='input'>
        <button
          className='span-2 dark-button'
          onClick={() => {
            dispatch({ type: ACTIONS.CLEAR });
          }}
        >
          AC
        </button>
        <button
          className='dark-button'
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_DIGIT });
          }}
        >
          DEL
        </button>
        <OperationButton operation='/' dispatch={dispatch} />
        <AddDigitButton digit='1' dispatch={dispatch} />
        <AddDigitButton digit='2' dispatch={dispatch} />
        <AddDigitButton digit='3' dispatch={dispatch} />
        <OperationButton operation='*' dispatch={dispatch} />
        <AddDigitButton digit='4' dispatch={dispatch} />
        <AddDigitButton digit='5' dispatch={dispatch} />
        <AddDigitButton digit='6' dispatch={dispatch} />
        <OperationButton operation='+' dispatch={dispatch} />
        <AddDigitButton digit='7' dispatch={dispatch} />
        <AddDigitButton digit='8' dispatch={dispatch} />
        <AddDigitButton digit='9' dispatch={dispatch} />
        <OperationButton operation='-' dispatch={dispatch} />
        <AddDigitButton digit='.' dispatch={dispatch} />
        <AddDigitButton digit='0' dispatch={dispatch} />
        <button
          className='span-2 dark-button'
          onClick={() => {
            dispatch({ type: ACTIONS.EVALUATE });
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
