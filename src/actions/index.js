const  ADD_ITEM = "ADD_ITEM";
const CALCULATE_TAX = "CALCULATE_TAX";
const CALCULATE_TOTAL = "CALCULATE_TOTAL";

export const addItem = (item) => {
  return{
    type: ADD_ITEM,
    payload: item
  }
}
