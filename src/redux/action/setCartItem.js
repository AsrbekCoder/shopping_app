export const setcartItem = (cart) => ({
  type: "ADDED_PRODUCT",
  payload: cart,
});
export const deletetCartItem = (id) => ({
  type: "DELETED_PRODUCT",
  payload: id,
});
