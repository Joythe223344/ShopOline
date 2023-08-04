import React, { useState } from "react";
import Header from "./../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/CartActions";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  console.log(cart.cartItems[0].qty);
  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(paymentMethod);
    if (paymentMethod == "PayPal") {
      dispatch(savePaymentMethod(paymentMethod));
      history.push("/placeorder");
    } else if (paymentMethod == "OnePay") {
      dispatch(savePaymentMethod(paymentMethod));
      history.push("/placeorderOnePay");
    }
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>ກະລຸນນາເລືອກວິທີການຊຳລະເງີນ</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal</label>
            </div>

            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value="OnePay"
                checked={paymentMethod === "OnePay"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">OnePay</label>
            </div>
          </div>

          <button type="submit">ຕໍ່ໄປ</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
