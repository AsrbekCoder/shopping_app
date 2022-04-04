const initialState = {
  item: [],
  isLoading: false,
};

const cartItem = (state = initialState, action) => {
  switch (action.type) {
    case "ADDED_PRODUCT":
      return {
        ...state,
        item: [...state.item, action.payload],
        isLoading: true,
      };

    case "DELETED_PRODUCT":
      return {
        ...state,
        item: state.item.filter((e) => e._id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartItem;
