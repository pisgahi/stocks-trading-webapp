import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UserSnippet from "./UserSnippet";

export default function Header() {
  return (
    <header className="header__container">
      <div className="search__container">
        <div className="magnifyer__container">
          <FontAwesomeIcon
            className="fa__magnifying"
            icon={faMagnifyingGlass}
          />
        </div>
        <input
          className="search__input"
          type="text"
          placeholder="Search for stocks"
        />
      </div>
      <div className="user__snippet__header--container">
        <UserSnippet />
      </div>
    </header>
  );
}
