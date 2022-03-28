import React from "react";

const CartBox = ({ itemsGeter, onClickBoolen }) => {
  return (
    <div
      className={
        itemsGeter.length > 0 ? "shop_cart shop_cart_active" : "shop_cart"
      }
      onClick={onClickBoolen}
    >
      <img src="../img/cart.svg" alt="" />
      <div className="shop_number">{itemsGeter.length}</div>
    </div>
  );
};

export default CartBox;
