import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal_Checkout_Button = (props) => {
  const { checkoutProduct } = props;

  const [PaidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (ordeId) => {
    setPaidFor = true;
  };

  if(PaidFor){
    console.log("Thank You For Purchasing");
  }

  if(error){
     alert(error);
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={(data, actions)=>{
            const hasAlreadyBought = false;
            if(hasAlreadyBought){
                setError("You already bought");
                return actions.reject();
            }else{
                return actions.resolve();
            }
        }}

        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "", //checkoutProduct.description
                amount: {
                  value: "", // checkoutProduct.price
                },
              },
            ],
          });
        }}
        onApprove={async (data, action) => {
          const order = await action.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
        }}

        onCancel={()=>{}}
        onError={(err)=>{
            setError(err);
            console.log("PayPal Checkout on Error", err)
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal_Checkout_Button;
