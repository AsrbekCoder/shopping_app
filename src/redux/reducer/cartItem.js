const initialState = {
  item: [],
  isLoading: false,
};

const cartItem = (state = initialState, action) => {
  if (action.type === "ADDED_PRODUCT") {
    return {
      ...state,
      item: [...state.item, action.payload],
      isLoading: true,
    };
  }
  return state;
};

export default cartItem;
