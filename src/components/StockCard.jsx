import React, { useEffect, useState } from "react";
import stockGraph from "../assets/stock.svg";
import axios from "axios";

export default function StockCard(props) {
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
    <div className="stock__card">
      <div className="stock__name__value__owned">
        <div className="stock__name--container">
          <h4 className="stock__name">{props.ticker}</h4>
        </div>
        <div className="owned__info">
          <h5 className="owned__title">You Own</h5>
          <h4 className="value__owned">${props.owned}</h4>
        </div>
      </div>

      <div className="percent__price-change__graph">
        <div className="percent__price--container">
          <h4 className="green-text percent">{sideStock.dp?.toFixed(2)}%</h4>
          <h4 className="green-text price-change">{sideStock.d?.toFixed(2)}</h4>
        </div>
        <div className="graph">
          <img src={stockGraph} alt="Graph" className="stock-card__graph" />
        </div>
      </div>
    </div>
  );
}
