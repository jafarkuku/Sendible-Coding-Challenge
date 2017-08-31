const initialState = {
  name: "",
  quantity: 0,
  price: 0,
  checked: false,
  exempt: "no"
}

const activeitem = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_ITEM':
      return Object.assign({}, state, action.payload)
  }
  return state
}

export default activeitem;
