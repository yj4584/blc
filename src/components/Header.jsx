import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [showWoodSubMenu, setShowWoodSubMenu] = useState(false);
  const [showSteelSubMenu, setShowSteelSubMenu] = useState(false);
  return (
    <section className="header-section">
      <NavLink to="/">
        <div className="logo"></div>
      </NavLink>
      <div className="menus">
        <ul className="menu-list">
          <li className="menu">
            <NavLink to="/intro">회사소개</NavLink>
          </li>
          <li
            className="menu"
            onMouseEnter={() => {
              setShowWoodSubMenu(true);
            }}
            onMouseLeave={() => {
              setShowWoodSubMenu(false);
            }}
          >
            <NavLink to="/wood">합성목재</NavLink>
            <ul
              className={`sub-menu ${
                showWoodSubMenu ? "visible" : "invisible"
              }`}
            >
              <li className="sub-menu-item">
                <NavLink to="/wood">데크&클립</NavLink>
              </li>
              <li className="sub-menu-item">
                <NavLink to="/fence">휀스&브라켓</NavLink>
              </li>
            </ul>
          </li>
          <li
            className="menu"
            onMouseEnter={() => {
              setShowSteelSubMenu(true);
            }}
            onMouseLeave={() => {
              setShowSteelSubMenu(false);
            }}
          >
            <NavLink to="/steelwork">연결철물&주춧돌</NavLink>
            <ul
              className={`sub-menu ${
                showSteelSubMenu ? "visible" : "invisible"
              }`}
            >
              <li className="sub-menu-item">
                <NavLink to="/steelwork">연결철물</NavLink>
              </li>
              <li className="sub-menu-item">
                <NavLink to="/stone">주춧돌</NavLink>
              </li>
            </ul>
          </li>
          <li className="menu">
            <NavLink to="/facility">공장 및 목재창고</NavLink>
          </li>
          {/* <li className="menu"><NavLink to="/service">고객센터</NavLink></li> */}
        </ul>
      </div>
    </section>
  );
}
