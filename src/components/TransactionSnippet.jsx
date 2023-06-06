import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins
} from "@fortawesome/free-solid-svg-icons";

export default function TransactionSnippet(props) {
  return (
    <div className="transaction__snippet--container">
      <div className="transaction__indicator--container">
        <div className="fa__transaction--container">
          <FontAwesomeIcon className="fa__transaction" icon={faCoins} />
        </div>
        <div className="transaction__title--container">
          <h3 className="transaction__title">{props.typeTitle}</h3>
          <h5 className="transaction__type">{props.type}</h5>
        </div>
      </div>

      <div className="transaction__status--container">
        <h3 className="transaction__status">{props.status}</h3>
      </div>

      <div className="transaction__amount--container">
        <h3 className="transaction__ammount">{props.ammount}</h3>
      </div>
    </div>
  );
}
