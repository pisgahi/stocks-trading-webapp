import React, { useEffect, useState } from "react";
import "../styles.css";
import axios from "axios";

export default function StockSnippet(props) {
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
    <div className="stock-snippet--container">
      <div className="name__value--container">
        <h4 className="stock-card--name">{props.ticker}</h4>
        <h4 className="value">${sideStock.c}</h4>
      </div>

      <div className="percent-change__price-change--container">
        <h4 id="plusMin__handle" className="green-text percent-change">
          {sideStock.dp?.toFixed(2)}%
        </h4>
        <h4 id="plusMin__handle" className="green-text price-change">
          {sideStock.d?.toFixed(2)}
        </h4>
      </div>
    </div>
  );
}
