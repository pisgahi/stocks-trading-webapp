import React from "react";
import "../styles.css";
import logo from "../assets/logo.png";
import StockCard from "./StockSnippet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faGear,
  faHouse,
  faListOl,
  faPhone,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="side-bar__container">
      <div className="logo">
        <div className="logo__img--container">
          <img className="logo__img" src={logo} alt="Logo" />
        </div>
        <h2 className="logo__title">InvestorMent</h2>
      </div>

      <div className="two__stocks--container">
        <StockCard ticker="AAPL" />
        <StockCard ticker="AMZN" />
      </div>

      <div className="sidebar__menu--container">
        <h2 className="menu__options--title menu__options">Menu</h2>
        <div className="menu__options--container">
          <Link to="/" className="menu__options home__page">
            <FontAwesomeIcon className="fa__icon--sidebar" icon={faHouse} />
            Home
          </Link>
          <Link to="/watchlist" className="menu__options watch-list__page">
            <FontAwesomeIcon
              className="fa__icon--sidebar"
              icon={faChartSimple}
            />
            Watch List
          </Link>
          <Link to="/transactions" className="menu__options transactions__page">
            <FontAwesomeIcon className="fa__icon--sidebar" icon={faListOl} />
            Transactions
          </Link>
        </div>
      </div>

      <div className="sidebar__menu--container">
        <h2 className="menu__support--title menu__options">Support</h2>
        <div className="menu__options--container">
          <Link to="/support" className="menu__options support__page">
            <FontAwesomeIcon className="fa__icon--sidebar" icon={faPhone} />
            Help
          </Link>
          <Link to="" className="menu__options settings__page">
            <FontAwesomeIcon className="fa__icon--sidebar" icon={faGear} />
            Settings
          </Link>
        </div>
      </div>

      <div className="wallet__balance--super__container">
        <div className="wallet__balance--container">
          <FontAwesomeIcon className="wallet__balance" icon={faWallet} />{" "}
          <h3 className="balance__ammount">$23,927.82</h3>
          {/* <FontAwesomeIcon className="light__dark--option toggle" icon={faToggleOff} /> */}
        </div>
      </div>
    </div>
  );
}
