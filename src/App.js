import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/pages/HomeLayout";
import TransactionsPage from "./components/pages/TransactionsPage";
import WatchListPage from "./components/pages/WatchListPage";
import HelpPage from "./components/pages/HelpPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomeLayout />} />
          <Route path="/" element={<HomeLayout />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/support" element={<HelpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
