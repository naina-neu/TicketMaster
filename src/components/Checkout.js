import "bootstrap/dist/css/bootstrap.min.css";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Checkout = ({ selectedShowId, selectedShowSeat, props }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardType: "credit",
    name: "",
    cardNumber: "",
    expirationDate: "",
    security: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedShowData, setSelectedShowData] = useState({});

  const [paymentAmount, setPaymentAmount] = useState({
    total: 0,
    serviceFee: 12.0,
    processingFee: 5.0,
  });

  useEffect(() => {
    setSelectedShowData(
      resList.find((item) => item.data.id === selectedShowId)
    );
  }, [selectedShowId]);

  useEffect(() => {
    if (selectedShowData.data && selectedShowSeat) {
      setPaymentAmount({
        ...paymentAmount,
        total: selectedShowData.data.cost * selectedShowSeat,
      });
    }
  }, [selectedShowData, selectedShowSeat]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};

    if (!isValidCardNumber(paymentInfo.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (!isValidExpirationDate(paymentInfo.expirationDate)) {
      newErrors.expirationDate = "Invalid expiration date";
    }

    if (!isValidCVV(paymentInfo.security)) {
      newErrors.security = "Invalid CVV";
    }

    if (Object.keys(newErrors).length === 0) {
      // Handle successful form submission here
    } else {
      setErrors(newErrors);
    }
  };

  const isValidCardNumber = (cardNumber) => {
    // Perform card number validation here, e.g., check length and apply the Luhn algorithm.
    return cardNumber.length >= 13 && cardNumber.length <= 19;
  };

  const isValidExpirationDate = (expirationDate) => {
    // Perform expiration date validation here, e.g., check format and if it's in the future.
    return /(?:0[1-9]|1[0-2])\/[0-9]{2}/.test(expirationDate);
  };

  const isValidCVV = (cvv) => {
    // Perform CVV validation here, e.g., check if it's 3 or 4 digits.
    return /^[0-9]{3,4}$/.test(cvv);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="row margin_arg_top">
          <div></div>
          <div className="col-md-7">
            <div className="border_checkout">
              <div className="col-md-12 heading">
                Delivery & Show Information
              </div>
              <div className="col-md-12 info_text">Mobile - Free</div>
              <p>
                Mobile: Your phone's your ticket. Locate your tickets in your
                account - or in your app. When you go mobile, your tickets will
                not be emailed to you or available for print.
              </p>
              <p>
                {selectedShowData.data && selectedShowData.data.name}
                <br />
                {selectedShowData.data && selectedShowData.data.description}
                <br />
                {selectedShowData.data && selectedShowData.data.place}
                <br />
                {selectedShowData.data && selectedShowData.data.time}
                <br />
              </p>
            </div>

            <div className="border_checkout">
              <div class="col-md-12 payment_title">Payment</div>
              <div className="row g-5">
                <form className="form_display" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        className="card_img"
                        src="https://checkout.livenation.com/fanwallet/v4.67.0/static/images/wallet-items/american-express.svg"
                      />
                      <img
                        className="card_img"
                        src="https://checkout.livenation.com/fanwallet/v4.67.0/static/images/wallet-items/visa.svg"
                      />
                      <img
                        className="card_img"
                        src="https://checkout.livenation.com/fanwallet/v4.67.0/static/images/wallet-items/master-card.svg"
                      />
                      <img
                        className="card_img"
                        src="https://checkout.livenation.com/fanwallet/v4.67.0/static/images/wallet-items/discover.svg"
                      />
                      <img
                        className="card_img"
                        src="https://checkout.livenation.com/fanwallet/v4.67.0/static/images/wallet-items/diners-club.svg"
                      />
                      <img
                        className="card_img"
                        src="https://checkout.livenation.com/fanwallet/v4.67.0/static/images/wallet-items/maestro.svg"
                      />
                    </div>
                  </div>
                  <div className="row margin_n">
                    <label className="col-md-12 card_title">Card Type:</label>
                    <select
                      className="col-md-12 card_type"
                      name="cardType"
                      value={paymentInfo.cardType}
                      onChange={handleInputChange}
                    >
                      <option value="credit">Credit Card</option>
                      <option value="debit">Debit Card</option>
                    </select>
                  </div>

                  <div className="row margin_n">
                    <label className="col-md-12 card_title">
                      Name on Card:
                    </label>
                    <input
                      className="col-md-12 card_type"
                      type="text"
                      name="name"
                      value={paymentInfo.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="row margin_n">
                    <label className="col-md-12 card_title">Card Number:</label>
                    <input
                      className="col-md-12 card_type"
                      type="text"
                      name="cardNumber"
                      value={paymentInfo.cardNumber}
                      onChange={handleInputChange}
                    />
                    {errors.cardNumber && <span>{errors.cardNumber}</span>}
                  </div>

                  <div className="row margin_n">
                    <label className="col-md-3 card_title">
                      Expiration Date:{" "}
                    </label>
                    <input
                      className="col-md-2 card_type"
                      type="text"
                      name="expirationDate"
                      value={paymentInfo.expirationDate}
                      onChange={handleInputChange}
                    />
                    {errors.expirationDate && (
                      <span>{errors.expirationDate}</span>
                    )}

                    <label className="col-md-3 card_title">
                      Security Code (CVV):
                    </label>
                    <input
                      className="col-md-4 card_type"
                      type="text"
                      name="security"
                      value={paymentInfo.security}
                      onChange={handleInputChange}
                    />
                    {errors.security && <span>{errors.security}</span>}
                  </div>

                  <button className="order_button" type="submit">
                    Add Card
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row border_checkout">
              <div className="row">
                <div className="col-md-6 total_title">Total </div>
                <div className="col-md-6 total_amount">
                  ${paymentAmount.total}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 ticket_title">Tickets</div>
              </div>
              <div className="row payment_content">
                <div className="col-md-6">
                  Verified Resale Tickets : ${paymentAmount.total} * 2
                </div>
                <div className="col-md-6 float-right">
                  ${paymentAmount.total}
                </div>
              </div>

              <div className="row">
                <p className="col-md-12 margin_arg_top">
                  xfr XFER Proof of at least one dose of COVID-19 vaccination
                  for ages 5 to 11 and guests ages 12 and up will be required to
                  show proof of two COVID-19 vaccine doses or one dose of the
                  Johnson and Johnson vaccine. Masks must be worn
                </p>
              </div>
              <div className="row">
                <div className="col-md-12 float-left margin_arg_top">
                  *All Sales Final - No Refunds or Exchanges
                </div>
                <div className="col-md-12 float-left margin_arg_top">
                  <input type="checkbox" /> I have read and agree to the current
                  Terms of Use
                </div>
                <button className="order_button margin_arg_top">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
