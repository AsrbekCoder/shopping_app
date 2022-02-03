import { Cart, Drawer, Header } from "./components";
import "./style/style.scss";
import search from "./img/search.svg";

function App() {
  return (
    <div className="wrapper">
      <div className="shop_cart">
        <img src="./img/cart.svg" alt="" />
        <div className="shop_number">1</div>
      </div>
      <div className="overlay">
        <Drawer />
      </div>
      <Header />

      <main className="main__container">
        <div className="main_text text">
          <h1>All Sneakers</h1>
          <div className="main_search">
            <img src={search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <Cart />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
