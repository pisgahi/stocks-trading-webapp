import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import StockCard from "../StockCard";
import PortfolioSide from "../PortfolioSide";
import TrendingStock from "../TrendingStock";
import TransactionSnippet from "../TransactionSnippet";

export default function HomeLayout() {
  return (
    <div className="home__layout--container">
      <div className="main__section--container">
        <div className="main__section">
          <Sidebar />

          <div className="header__main--container">
            <div className="header__container__main__section">
              <Header />
            </div>

            <section className="main__without__header--container">
              <div className="main__collection--container">
                <h1 className="collection--title">Top Performers</h1>

                <div className="stock-card__collection">
                  <StockCard ticker="TSLA" owned="3,097.26" />
                  <StockCard ticker="GOOGL" owned="6,592.13" />
                  <StockCard ticker="META" owned="1,413.47" />
                </div>
                <h1 className="collection--title">Trending</h1>

                <div className="trending__stock__collection">
                  <TrendingStock ticker="MSFT" />
                  <TrendingStock ticker="NFLX" />
                  <TrendingStock ticker="NVDA" />
                  <TrendingStock ticker="CRM" />
                </div>

                <div className="transaction__collection">
                  <h1 className="collection--title">Transactions</h1>
                  <TransactionSnippet
                    typeTitle="Withdrawl Funds"
                    type="Withdrawl"
                    status="Pending"
                    ammount="-5,000"
                  />
                  <TransactionSnippet
                    typeTitle="Deposit Funds"
                    type="Deposit"
                    status="Completed"
                    ammount="+2,500"
                  />
                </div>
              </div>

              <PortfolioSide />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
