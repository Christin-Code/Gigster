import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#dff0d8",
    color: "#3c763d",
    border: "1px solid #3c763d",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      Payment successful. You are being redirected to the orders page. Please do
      not close the page.
    </div>
  );
};

export default Success;
