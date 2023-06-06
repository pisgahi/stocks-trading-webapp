import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function WatchListSnippet(props) {
  const [sideStock, setSideStock] = useState([]);

  useEffect(() => {
    stockCardStock();
  }, []);

  const stockCardStock = async () => {
    const baseUrl = "https://finnhub.io/api/v1/quote";
    const TOKEN = "&token=chr5bahr01qkb63ar3c0chr5bahr01qkb63ar3cg";

    const { data } = await axios.get(
      `${baseUrl}?symbol=${props.ticker}${TOKEN}`
    );
    const result = data;
    setSideStock(result);
  };

  return (
    <div className="transaction__snippet--container">
      <div className="transaction__indicator--container">
        <div className="fa__transaction--container">
          <FontAwesomeIcon className="fa__trending" icon={faCubes} />
        </div>
        <div className="transaction__title--container">
          <h3 className="transaction__title">{props.ticker}</h3>
        </div>
      </div>

      <div className="transaction__status--container">
        <h3 className="transaction__status">${sideStock.c}</h3>
      </div>

      <div className="transaction__amount--container">
        <h3 className="transaction__ammount">{sideStock.dp?.toFixed(2)}%</h3>
      </div>
    </div>
  );
}
