import React, { useState } from "react";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import TicketCard from "./components/TicketCard";
import "bootstrap/dist/css/bootstrap.min.css";
import resList from "./utils/mockData.js";
import "./App.css";

/****
 *
 * Header
 *  - Logo
 *  - Nav items
 *
 * Body
 * - Ticket Container
 *    - Ticket Card
 *
 * Footer
 *  - Copyright
 */
function App() {
  const [selectedShowId, setShowSelectedItemId] = useState(null);
  const [selectedShowSeat, setShowSelectedItemShowSeat] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onShowClick = (id, seatCount) => {
    console.log(id, "id");
    setShowSelectedItemId(id);
    setShowSelectedItemShowSeat(seatCount);
    setShowConfirmation(true);
  };
  return (
    <div className="App">
      <Header />
      {showConfirmation ? (
        <Checkout
          selectedShowId={selectedShowId}
          selectedShowSeat={selectedShowSeat}
        />
      ) : (
        resList.map((ticket) => (
          <TicketCard
            key={ticket.data.id}
            resData={ticket}
            onShowCardClick={onShowClick}
          />
        ))
      )}
      <Footer />
    </div>
  );
}

export default App;
