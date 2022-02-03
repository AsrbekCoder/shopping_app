import React from "react";
import shoe from "../img/sneakers/1.jpg";
import shoe2 from "../img/sneakers/2.jpg";
import shoe3 from "../img/sneakers/3.jpg";
import cross from "../img/plus.svg";

const Drawer = () => {
  const selected = [
    {
      content: "Mужская кроссовки",
      brand: "Nike",
      img: shoe,
      sizes: 32,
      prise: 64000,
      contentPrise: "64 000",
    },

    {
      content: "Mужская кроссовки",
      brand: "Nike",
      img: shoe2,
      sizes: 32,
      prise: 64000,
      contentPrise: "64 000",
    },

    {
      content: "Mужская кроссовки",
      brand: "Nike",
      img: shoe3,
      sizes: 32,
      prise: 64000,
      contentPrise: "64 000",
    },
  ];
  return (
    <div className="drawer">
      <h1>Korzina</h1>
      <ul className="drawer_cart">
        {selected.map((item) => (
          <li className="drawer_item">
            <div className="drawer_img">
              <img src={item.img} alt="" />
            </div>
            <div className="drawer_text">
              <p>
                {item.content}{" "}
                <i>
                  <strong>{item.brand}</strong>
                </i>
              </p>
              <p>Size: {item.sizes}</p>
              <p>
                <span>Цена:</span> <span>{item.contentPrise} so'm</span>
              </p>
            </div>
            <div className="drawer_close">
              <img
                src={cross}
                alt="1"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
