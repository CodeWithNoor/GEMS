import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal_Checkout_Button = (props) => {
  return (
    <PayPalScriptProvider>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
              purchase_units: [
                  {
                      amount: {
                          value: "1.99",
                      },
                  },
              ],
          });
      }}
      onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
              const name = details.payer.name.given_name;
              alert(`Transaction completed by ${name}`);
          });
      }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal_Checkout_Button;
