import React from "react";
import uuid from "react-uuid";
import MoneyCompiler from "../Helper/MoneyCompiler";

const PopupCart = ({ item, popupBolen, setPopupBolen, handleClickPlus }) => {
  const [counter, setCounter] = React.useState(1);
  const [sizeActive, setSizeActive] = React.useState(null);
  const [priseSetting, setPriseSetting] = React.useState(null);
  const [setSizeFalse, setSetSizeFalse] = React.useState(false);

  const handlePopupFalse = () => {
    setPopupBolen(false);
    setCounter(1);
    setSizeActive(null);
    setSetSizeFalse(false);
  };
  const handleSendToDrawer = (products) => {
    handleClickPlus(products);
    setPopupBolen(false);
    setCounter(1);
    setSetSizeFalse(false);
    setSizeActive(null);
  };

  const addedProduct = {
    _id: uuid(),
    content: item.content,
    name: item.brand,
    sizes: sizeActive,
    productImgUrl: item.productImgUrl,
    prise: priseSetting ? priseSetting : item.prise,
    quality: counter,
  };

  const handleGetSelectedSizes = (id) => {
    setSizeActive(id);
    setSetSizeFalse(false);
  };

  const sizeToSet = item.sizes.map((e) => e.split(",").sort((a, b) => a - b));
  const sizeSorting = [...new Set(...sizeToSet)];

  React.useEffect(() => {
    setPriseSetting(item.prise * counter);
  }, [counter, item.prise, setPriseSetting]);
  return (
    <div className={popupBolen ? "overlay active" : "overlay"}>
      <div className={popupBolen ? "popup_cart active" : "popup_cart"}>
        <div className="popup_header">
          <p className="popup_title">{item.brand}</p>
          <i className="bx bx-x" onClick={handlePopupFalse}></i>
        </div>

        <div className="popup_img">
          <img src={`http://localhost:5252/${item.productImgUrl}`} alt="" />
        </div>
        <div className="main_description_content">
          <strong>Sizes:</strong>
          <ul className="main_description_sizes">
            {sizeSorting.map((e, idx) => (
              <li
                key={idx}
                onClick={() => handleGetSelectedSizes(e)}
                className={sizeActive === e ? "active" : ""}
              >
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="popup_price">
          <div>
            {setSizeFalse ? <p>Pla se slect size</p> : null}
            <span>Jami</span>{" "}
            <b>
              {priseSetting
                ? MoneyCompiler(Number(priseSetting))
                : MoneyCompiler(Number(item.prise))}{" "}
              <span>so'm</span>
            </b>
          </div>
        </div>
        <div className="popup_payment">
          <button
            className="btn btn-success"
            onClick={() =>
              sizeActive
                ? handleSendToDrawer(addedProduct)
                : setSetSizeFalse(true)
            }
          >
            add card
          </button>
          <div className="popup_counter">
            <button
              className="btn"
              disabled={counter <= 1}
              onClick={() => setCounter((counter) => counter - 1)}
            >
              -
            </button>
            <span>{counter}</span>
            <button
              className="btn"
              disabled={counter >= 99}
              onClick={() => setCounter((counter) => counter + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCart;
