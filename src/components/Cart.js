import React from "react";
import { useDispatch } from "react-redux";
import { setcartItem } from "../redux/action/setCartItem";
import PopupCart from "./PopupCart";

const Cart = ({ item, getItems }) => {
  const [first, setfirst] = React.useState(false);
  const [popupBolen, setPopupBolen] = React.useState(false);

  const handleClick = () => {
    setfirst(() => !first);
  };
  const dispatch = useDispatch();

  const handleClickPlus = (obj) => {
    dispatch(setcartItem(obj));
    getItems(obj);
  };
  const hadlePopup = () => {
    setPopupBolen(true);
  };
  return (
    <>
      <div className="main_shopping_items" onClick={hadlePopup}>
        <div className="main_shopping_img">
          <img src={`http://localhost:5252/${item.productImgUrl}`} alt="1" />
        </div>
        <div className="main_description">
          <div className="heart" onClick={handleClick}>
            <img
              src={!first ? "../../img/heart.svg" : "../../img/liked.svg"}
              alt=""
            />
          </div>
          <p className="main_description_title">{item.content} Кроссовки </p>
          <i>
            <strong>{item.brand}</strong>
          </i>
        </div>

        <div className="main_colors">
          <i> Black/Orange/Red </i>
        </div>

        <div className="main_shipping">
          <div className="main_shipping_pay">
            <span>Цена:</span>
          </div>

          <div className="main_shipping_add">
            <span>+</span>
            <span>{item.prise} so'm</span>
          </div>
        </div>
      </div>
      <PopupCart
        item={item}
        popupBolen={popupBolen}
        setPopupBolen={setPopupBolen}
        handleClickPlus={handleClickPlus}
      />
    </>
  );
};

export default Cart;
