import { Cart, Drawer, Header, PopupCart } from "./components";
import "./style/style.scss";

import { useState } from "react";
import Api from "./server";
import React from "react";

const App = () => {
  const [itemsGeter, setitemsGeter] = useState([]);
  const [boolenOverlay, setBoolenOverlay] = useState(false);
  const [micro, setMicro] = useState(null);
  const [serchBy, setSerchBy] = useState("");
  const getItems = (shipingItems) => {
    setitemsGeter([...itemsGeter, shipingItems]);
  };
  const onClickBoolen = () => {
    setBoolenOverlay(true);
  };

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await new Api().getPrductSneakers("getProduct");
        setMicro(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="wrapper">
      <div
        className={
          itemsGeter.length > 0 ? "shop_cart shop_cart_active" : "shop_cart"
        }
        onClick={onClickBoolen}
      >
        <img src="../img/cart.svg" alt="" />
        <div className="shop_number">{itemsGeter.length}</div>
      </div>

      <div className={boolenOverlay ? "overlay active" : "overlay"}>
        <Drawer itemsGeter={itemsGeter} setBoolenOverlay={setBoolenOverlay} />
      </div>
      <Header />

      <main className="main__container">
        <div className="main_text text">
          <h1>All Sneakers</h1>
          <div className="main_search">
            <img src="../img/search.svg" alt="" />
            <input
              type="search"
              placeholder="Search"
              value={serchBy}
              onChange={(e) => setSerchBy(e.target.value)}
            />
          </div>
        </div>
        <div className="main_shopping">
          {micro &&
            micro
              .filter((e) =>
                e.brand
                  .toLocaleLowerCase()
                  .includes(serchBy.toLocaleLowerCase())
              )
              .map((e) => <Cart item={e} getItems={getItems} key={e._id} />)}
        </div>
      </main>

      <PopupCart />
      <footer></footer>
    </div>
  );
};

export default App;
