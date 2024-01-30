import { ACTIONS } from "../../Calculator";

const AddDigitButton = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: digit });
      }}
    >
      {digit}
    </button>
  );
};
export default AddDigitButton;
