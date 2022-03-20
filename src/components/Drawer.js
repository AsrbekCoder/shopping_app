import React from "react";

const Drawer = ({ setBoolenOverlay, itemsGeter }) => {
  return (
    <div className="drawer">
      <div className="drawer_header">
        <h1>Korzina</h1>
        <img
          src="../../img/plus.svg"
          alt="cross"
          style={{ transform: "rotate(-45deg)" }}
          onClick={() => setBoolenOverlay(false)}
        />
      </div>
      <ul className="drawer_cart">
        {itemsGeter.map((item) => (
          <li className="drawer_item" key={item._id}>
            <div className="drawer_img">
              <img src={`http://localhost:5252/${item.productImgUrl}`} alt="" />
            </div>
            <div className="drawer_text">
              <p>
                {item.content}{" "}
                <i>
                  <strong>{item.brand}</strong>
                </i>
              </p>
              <p>Size: {item.sizes[0]}</p>
              <p>
                <span>Цена:</span> <span>{item.prise} so'm</span>
              </p>
            </div>
            <div className="drawer_close">
              <img
                src="../../img/plus.svg"
                alt="1"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="drawer_paybox">
        <div className="drawer_paysum">
          <p>All:</p>
          <span></span>
          <p>190 000 so'm</p>
        </div>
        <div className="drawer_btn">
          <button value="shop">
            shop <span>{">"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
