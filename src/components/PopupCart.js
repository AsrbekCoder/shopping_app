import React from "react";

const PopupCart = ({ item, popupBolen, setPopupBolen, handleClickPlus }) => {
  const [counter, setCounter] = React.useState(1);

  const handlePopupFalse = () => {
    setPopupBolen(false);
    setCounter(1);
  };
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
          <span>Sizes:</span>
          <ul className="main_description_sizes">
            {item.sizes.map((e) =>
              e
                .split(",")
                .sort((a, b) => a - b)
                .map((e, idx) => (
                  <li key={idx} onClick={() => console.log(e)}>
                    {e}
                  </li>
                ))
            )}
          </ul>
        </div>

        <div className="popup_price">
          <div>
            <span>Jami</span>{" "}
            <b>
              {item.prise} <span>so'm</span>
            </b>
          </div>
        </div>
        <div className="popup_payment">
          <button
            className="btn btn-success"
            onClick={() => handleClickPlus(item)}
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
