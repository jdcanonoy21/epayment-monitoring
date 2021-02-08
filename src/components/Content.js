import React, { useState, useEffect } from 'react'
import "./Content.css";

const partners = [
    {name: "Landbank"},
    { name: "DBP" },
    { name: "PayMaya" },
    { name: "Gcash"}
];

const ePayment = [
    { lgu: 'Aklan', partner: ['1,000', '200', '400', '600','2,200'] },
    { lgu: 'Legazpi', partner: ['100','12','500','200','812'] },
    { lgu: 'Panglao', partner: ['88','12','200','200','500'] },
    { lgu: 'Kalibo', partner: ['10','20','500','200','730'] }
  ];




const Monitoring = (props) => {
    const [partner] = useState(partners); 

  return (
    <div className="Content">
		<div className="Content__header">
			<p className="Content__lgu">LGU</p>
			{partner.map( partner => (
			  <p className="Content__partners">{partner.name}</p>
			))}
			<p className="Content__partners">TOTAL</p>
		</div>
        {
          ePayment.map(item => (
              <div className="Content__subContainer">
              	<p className="Content__lgu">{item.lgu}</p>
                {item.partner.map(partner => (
	                <p className="Content__partners">{`${partner}`}</p>
	            ))}
              </div>
          ))
      	}
    </div>
  );
};



export default Monitoring;
