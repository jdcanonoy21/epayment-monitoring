import React, { useState, useEffect } from "react";
import "./Content.css";

const partners = [
  { name: "Gcash" },
  { name: "DBP" },
  { name: "Landbank" },
  { name: "PayMaya" },
];

const ePayment = [
  { lgu: "Aklan", partner: { landbank: 12, dbp: 50, paymaya: 30, gcash: 0 } },
  { lgu: "Legazpi", partner: { landbank: 12, dbp: 50, paymaya: 30, gcash: 0 } },
  // { lgu: "Legazpi", partner: ["100", "12", "500", "200", "812"] },
  // { lgu: "Panglao", partner: ["88", "12", "200", "200", "500"] },
  // { lgu: "Kalibo", partner: ["10", "20", "500", "200", "730"] },
];

const Monitoring = (props) => {
  const [partner] = useState(partners);

  return (
    <div className="Content">
      <div className="Content__header">
        <p className="Content__lgu">LGU</p>
        {partner.map((partner) => (
          <p className="Content__partners">{partner.name}</p>
        ))}
        <p className="Content__partners">TOTAL</p>
      </div>
      {ePayment.map((payment) => {
        return partner.map((partner) => {
          return <div>{payment.partner[partner.name.toLowerCase()]} </div>;
        });
      })}
    </div>
  );
};

export default Monitoring;
