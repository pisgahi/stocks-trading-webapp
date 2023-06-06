import {
  faArrowTrendUp,
  faChartSimple,
  faMinus,
  faMoneyBill,
  faPlus,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PortfolioSide() {
  return (
    <div className="portfolio__side--container">
      <div className="my__portfolio">
        <h3 className="my__portfolio--title">My Porfolio</h3>
        <div className="portfolio__card">
          <div className="fa__my__portfolio--container">
            <FontAwesomeIcon
              className="fa__my__portfolio"
              icon={faArrowTrendUp}
            />
          </div>
          <div className="gain__container">
            <h5 className="portfolio__title">Gain</h5>
            <h4 className="ammount__gained">+10,492.83</h4>
          </div>
        </div>
        <div className="portfolio__card">
          <div className="fa__my__portfolio--container">
            <FontAwesomeIcon className="fa__my__portfolio" icon={faMoneyBill} />
          </div>
          <div className="gain__container">
            <h5 className="portfolio__title">Buying Power</h5>
            <h4 className="ammount__gained">+6,274.23</h4>
          </div>
        </div>
      </div>

      <div className="my__portfolio">
        <h3 className="my__portfolio--title">Recent Activity</h3>
        <div className="portfolio__card">
          <div className="fa__my__portfolio--container">
            <FontAwesomeIcon
              className="portfolio-green fa__my__portfolio"
              icon={faPlus}
            />
          </div>
          <div className="gain__container">
            <h5 className="portfolio__title">Buy</h5>
            <h4 className="ammount__gained">+3,492.65</h4>
          </div>
        </div>
        <div className="portfolio__card">
          <div className="fa__my__portfolio--container">
            <FontAwesomeIcon
              className="portfolio-green fa__my__portfolio"
              icon={faPlus}
            />
          </div>
          <div className="gain__container">
            <h5 className="portfolio__title">Buy</h5>
            <h4 className="ammount__gained">+5,492.63</h4>
          </div>
        </div>
        <div className="portfolio__card">
          <div className="fa__my__portfolio--container">
            <FontAwesomeIcon className="fa__my__portfolio" icon={faMinus} />
          </div>
          <div className="gain__container">
            <h5 className="portfolio__title">Sell</h5>
            <h4 className="ammount__gained">-2,492.47</h4>
          </div>
        </div>
        <div className="portfolio__card">
          <div className="fa__my__portfolio--container">
            <FontAwesomeIcon className="fa__my__portfolio" icon={faPlus} />
          </div>
          <div className="gain__container">
            <h5 className="portfolio__title">Buy</h5>
            <h4 className="ammount__gained">+1,362.53</h4>
          </div>
        </div>
      </div>

      <div className="my__portfolio--market-cap">
        <div className="portfolio__card--market-cap">
          <div className="fa__my__portfolio--container--market-cap">
            <FontAwesomeIcon
              className="fa__arrow__portfolio--market__cap"
              icon={faSquarePollVertical}
            />
          </div>
          <div className="gain__container--market-cap">
            <h5 className="portfolio__title">Market Cap</h5>
            <h4 className="ammount__gained">$40.3 T</h4>
          </div>
          <div className="fa2__my__portfolio--container">
            <FontAwesomeIcon
              className="fa__portfolio--market__cap2"
              icon={faChartSimple}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
