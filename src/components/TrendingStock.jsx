import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function TrendingStock(props) {
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
    <div className="trending__stock--container">
      <div className="stock__logo">
        <div className="fa__trending--container">
          <FontAwesomeIcon className="fa__trending" icon={faCubes} />
        </div>
      </div>

      <div className="stock__name__trending--container">
        <h4 className="stock__name--trending">{props.ticker}</h4>
      </div>

      <div className="price__percent__trending--container">
        <h4 className="stock__price">{sideStock.c?.toFixed(2)}</h4>
        <h5 className="percent__trending">
          {sideStock.dp?.toFixed(2)}% <span className="day__change">Today</span>
        </h5>
      </div>
    </div>
  );
}
