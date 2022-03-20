import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#as" className="header_logo">
          <img src="../../img/logo.png" alt="" />
          <div className="header_subtitle">
            <h1>Shoes Shop</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
        </a>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="nav_list">
              <img src="../../img/heart.svg" alt="" />
            </li>
            <li className="nav_list">12 000 so'm</li>
            <li className="nav_list">
              <img src="../../img/user.svg" alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
