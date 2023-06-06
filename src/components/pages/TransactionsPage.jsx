import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import TransactionSnippet from "../TransactionSnippet";
import PortfolioSide from "../PortfolioSide";

export default function TransactionsPage(props) {
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
                  <TransactionSnippet
                    typeTitle="Withdrawl Funds"
                    type="Withdrawl"
                    status="Completed"
                    ammount="-1,500"
                  />
                  <TransactionSnippet
                    typeTitle="Withdrawl Funds"
                    type="Withdrawl"
                    status="Completed"
                    ammount="-2,000"
                  />
                  <TransactionSnippet
                    typeTitle="Deposit Funds"
                    type="Deposit"
                    status="Completed"
                    ammount="+15,000"
                  />
                  <TransactionSnippet
                    typeTitle="Withdrawl Funds"
                    type="Withdrawl"
                    status="Completed"
                    ammount="-3,500"
                  />
                  <TransactionSnippet
                    typeTitle="Deposit Funds"
                    type="Deposit"
                    status="Completed"
                    ammount="+25,000"
                  />
                  <TransactionSnippet
                    typeTitle="Withdrawl Funds"
                    type="Withdrawl"
                    status="Completed"
                    ammount="-8,000"
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
