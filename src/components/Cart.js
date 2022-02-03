import React from "react";
import heart from "../img/heart.svg";
import shoe from "../img/sneakers/1.jpg";
import shoe2 from "../img/sneakers/2.jpg";
import shoe3 from "../img/sneakers/3.jpg";
import shoe4 from "../img/sneakers/4.jpg";
import plus from "../img/btn-plus.svg";

const Cart = () => {
  const shoes = [
    {
      content: "Mужская кроссовки",
      brand: "Nike",
      img: shoe,
      sizes: [42, 43, 39],
      prise: 64000,
      contentPrise: "64 000",
    },
    {
      content: "Mужская кроссовки",
      brand: "Gucci",
      img: shoe2,
      sizes: [42, 43],
      prise: 164000,
      contentPrise: "164 000",
    },
    {
      content: "Mужская кроссовки",
      brand: "Nike",
      img: shoe3,
      sizes: [42, 43, 39, 37],
      prise: 110000,
      contentPrise: "110 000",
    },
    {
      content: "Mужская кроссовки",
      brand: "Tables",
      img: shoe4,
      sizes: [42, 39, 37],
      prise: 97000,
      contentPrise: "97 000",
    },
  ];

  return (
    <div className="main_shopping">
      {shoes &&
        shoes.map((item, idx) => (
          <div className="main_shopping_items" key={`${item}_${idx}`}>
            <div className="main_shopping_img">
              <img src={item.img} alt="1" />
            </div>
            <div className="main_description">
              <div className="heart">
                <img src={heart} alt="" />
              </div>
              <p className="main_description_title">
                {item.content}{" "}
                <i>
                  <strong>{item.brand}</strong>
                </i>
              </p>
              <div className="main_description_content">
                <span>Sizes:</span>
                <ul className="main_description_sizes">
                  {item.sizes?.map((e, idx) => (
                    <li key={idx}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="main_shipping">
              <div className="main_shipping_pay">
                <span>Цена:</span>
                <br />
                <span>{item.contentPrise} so'm</span>
              </div>

              <div className="main_shipping_add">
                <button className="btn">
                  <img src={plus} alt="btn" />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
