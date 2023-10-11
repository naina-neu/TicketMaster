import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const TicketCard = (props) => {
  const { resData } = props;
  console.log(resData, "resData");
  const [seatCount, setSeatCount] = useState(0);

  const updateTicketCounter = (value) => {
    let currentSeatCount = seatCount;
    if(currentSeatCount + value < 0)
    setSeatCount(0);
    else
    setSeatCount(currentSeatCount + value);
  };

  const bookTicket = () => {
    props.onShowCardClick(resData.data.id, seatCount);
  };

  return (
    <div className="container">
      <div className="row ticket-box row_organize">
        <div className="col-md-2">
          <img
            className="img_arg"
            alt=""
            src="https://s1.ticketm.net/dam/a/836/a1014292-993f-4064-9338-b5ad1be13836_1798851_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=164&height=92&fit=crop&auto=webp"
          />
        </div>
        <div className="date_style col-md-2">
          {resData.data.date}
          <br />
          <span className="time_style">{resData.data.time}</span>
        </div>
        <div className="col-md-4 ticket_name">{resData.data.name}</div>

        <div className="col-md-2 number">
          <button className="minus" onClick={() => updateTicketCounter(-1)}>
            -
          </button>
          <input
            className="input_text"
            type="text"
            value={seatCount}
            onChange={setSeatCount}
          />
          <button className="plus" onClick={() => updateTicketCounter(1)}>
            +
          </button>
        </div>
        <div className="col-md-2">
          <button className="btn_tickets" onClick={bookTicket}>
            See Tickets
          </button>
        </div>
        <hr />
        <div className="venue">VENUE INFO</div>
        <div className="col-md-12 ticket_description">
          {resData.data.description} <br />{" "}
          <span className="ticket_venue ">{resData.data.place}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
