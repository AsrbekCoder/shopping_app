import React from "react";

const Cart = ({ item, getItems }) => {
  const [first, setfirst] = React.useState(false);
  const [second, setsecond] = React.useState(false);

  const handleClick = (obj) => {
    setfirst(() => !first);
    console.log(obj);
  };

  const handleClickPlus = (obj) => {
    setsecond(() => !second);
    getItems(obj);
  };

  return (
    <div className="main_shopping_items">
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
      </div>

      <div className="main_shipping">
        <div className="main_shipping_pay">
          <span>Цена:</span>
          <br />
          <span>{item.prise} so'm</span>
        </div>

        <div className="main_shipping_add">
          <button className="btn" onClick={() => handleClickPlus(item)}>
            <img
              src={
                !second ? "../../img/btn-plus.svg" : "../../img/btn-checked.svg"
              }
              alt="btn"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
