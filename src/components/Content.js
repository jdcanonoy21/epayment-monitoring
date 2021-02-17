import React, { useState, useEffect } from "react";
import "./Content.css";

const initialPartners = [
  { name: "Gcash" },
  { name: "DBP" },
  { name: "Landbank" },
  { name: "PayMaya" },
  { name: "Total" },
];

const initialEpayments = [
  //{ lgu: "Aklan", partner: [ { landbank: 12 }, { dbp: 50 }, {paymaya: 30 }, { gcash: 0 } ] },
  //{ lgu: "ALbay", partner: [ { landbank: 1 }, { dbp: 1 }, {paymaya: 1 }, { gcash: 1 } ] },
  //{ lgu: "Legazpi", partner: [ { landbank: 2 }, { dbp: 2 }, {paymaya: 2 }, { gcash: 2 } ] },
  { lgu: "Legazpi", partner: { landbank: 1, dbp: 1, paymaya: 1, gcash: 1, total:4 } },
  { lgu: "Albay", partner: { landbank: 2, dbp: 2, paymaya:2, gcash: 0, total: 6 } },

];

const Content = (props) => {
  const [partners, setPartners] = useState(initialPartners);
  const [payments, setPayments] = useState(initialEpayments);

  return (
    <div className="Content">
      <center><h1>ePayment Monitoring</h1></center>
      <div className="Content__header">
        <p className="Content__lgu">LGU</p>
        {partners.map((partner) => (
          <p className="Content__partners">{partner.name}</p>
        ))}
      </div>
       {payments.map((payment) => {
        const partnComponents =  partners.map((partner) => {
          return <p className="Content__partners"> {payment.partner[partner.name.toLowerCase()]} </p>
        });
        return (
          <div className="Content__subContainer">
            <p className="Content__lgu"> {payment.lgu} </p>
            {partnComponents}
          </div>
        )
      })}
      
    </div>
  );
};

export default Content;
