import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MoneyCompiler from "../Helper/MoneyCompiler";
import { deletetCartItem } from "../redux/action/setCartItem";

const Drawer = ({ setBoolenOverlay, boolenOverlay }) => {
  const itemsGeter = useSelector(({ cartItem }) => cartItem);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(deletetCartItem(id));
  };
  return (
    <div className={boolenOverlay ? "overlay active" : "overlay"}>
      <div className={boolenOverlay ? "drawer active" : "drawer"}>
        <div className="drawer_header">
          <h1>Korzina</h1>
          <img
            src="../../img/plus.svg"
            alt="cross"
            style={{ transform: "rotate(-45deg)" }}
            onClick={() => setBoolenOverlay(false)}
          />
        </div>
        {itemsGeter.item?.length > 0 ? (
          <ul className="drawer_cart">
            {itemsGeter.item?.map((item) => (
              <li className="drawer_item" key={item._id}>
                <div className="drawer_img">
                  <img
                    src={`http://localhost:5252/${item.productImgUrl}`}
                    alt=""
                  />
                </div>
                <div className="drawer_text">
                  <p>
                    {item.content}{" "}
                    <i>
                      <strong>{item.brand}</strong>
                    </i>
                  </p>
                  <p>Size: {item.sizes}</p>
                  <p>Quality: {item.quality}</p>
                  <p>
                    <span>Цена:</span>{" "}
                    <span> {MoneyCompiler(Number(item.prise))} so'm</span>
                  </p>
                </div>
                <div className="drawer_close">
                  <img
                    onClick={() => removeProduct(item._id)}
                    src="../../img/plus.svg"
                    alt="1"
                    style={{ transform: "rotate(-45deg)" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty_cart">
            <img src="../../img/shopping-cart.png" alt="" />
          </div>
        )}

        <div className="drawer_paybox">
          <div className="drawer_paysum">
            <p>Jami:</p>
            <p>
              {MoneyCompiler(
                itemsGeter.item?.map((e) => e.prise).reduce((a, b) => a + b, 0)
              )}{" "}
              so'm
            </p>
          </div>
          <div className="drawer_btn">
            <button value="shop">
              shop <span>{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
