import React from "react";

const PopupCart = () => {
  const [counter, setCounter] = React.useState(1);
  let son = 1;
  return (
    <div className="overlay active">
      <div className="popup_cart">
        <div className="popup_header">
          <p className="popup_title">NIke Bx</p>
          <i className="bx bx-x"></i>
        </div>

        <div className="popup_img">
          <img src="../../img/sneakers/1.jpg" alt="" />
        </div>
        <div className="popup_section">
          <span>35</span>
          <span>34</span>
          <span>34</span>
          <span>32</span>
        </div>

        <div className="popup_price">
          <div>
            <span>Jami</span>{" "}
            <b>
              35 000 <span>so'm</span>
            </b>
          </div>
        </div>
        <div className="popup_payment">
          <button className="btn btn-success">add card</button>
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
