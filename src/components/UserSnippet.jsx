import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

export default function UserSnippet() {
  return (
    <div className="user__snippet--container">
      <div className="user__icons--container">
        <div className="user__icons">
          <FontAwesomeIcon className="fa__user-snippet" icon={faBell} />
        </div>
        <div className="user__icons">
          <FontAwesomeIcon className="fa__user-snippet" icon={faUser} />
        </div>
      </div>

      <div className="user__info">
        <h4 className="full__name">John Doe</h4>
        <h5 className="user__email">email@email.com</h5>
      </div>
    </div>
  );
}
