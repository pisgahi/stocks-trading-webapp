import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import PortfolioSide from "../PortfolioSide";
import WatchListSnippet from "../WatchListSnippet";

export default function WatchListPage() {
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
                <div className="transaction__collection">
                  <h1 className="collection--title">Watch List</h1>
                  <WatchListSnippet ticker="INTC" />
                  <WatchListSnippet ticker="QCOM" />
                  <WatchListSnippet ticker="V" />
                  <WatchListSnippet ticker="AMD" />
                  <WatchListSnippet ticker="SNOW" />
                  <WatchListSnippet ticker="MA" />
                  <WatchListSnippet ticker="JNJ" />
                  <WatchListSnippet ticker="CSCO" />
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
