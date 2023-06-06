import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import PortfolioSide from "../PortfolioSide";

export default function HelpPage() {
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
                <div className="help__items--container">
                  <h1 className="help__title">Help / Support</h1>
                  <div className="help__forms--container">
                    <input
                      type="text"
                      className="help__name"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      className="help__email"
                      placeholder="Email"
                    />
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="help__text-area"
                      placeholder="How can we help?"
                    ></textarea>
                    <button className="send__button">Send</button>
                  </div>
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
