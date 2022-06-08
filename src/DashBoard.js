import React from "react";
import Card from "./Card";


function DashBoard() {


  let item = [
    {
      id: 1,
      title: "Earnings (Monthly)",
      price: "$40,000",
      color: "card border-left-primary shadow h-100 py-2",
      icon: "fas fa-calendar fa-2x text-gray-300",
      textcolor: "text-xs font-weight-bold text-primary text-uppercase mb-1",
    },
    {
      id: 2,
      title: "Earnings (Annual)",
      price: "$215,000",
      color: "card border-left-success shadow h-100 py-2",
      icon: "fas fa-dollar-sign fa-2x text-gray-300",
      textcolor: "text-xs font-weight-bold text-success text-uppercase mb-1",
    },
    {
      id: 3,
      title: "Tasks",
      price: "50%",
      color: "card border-left-info shadow h-100 py-2",
      progressbar: true,
      icon: "fas fa-clipboard-list fa-2x text-gray-300",
      textcolor: "text-xs font-weight-bold text-info  text-uppercase mb-1",
    },
    {
      id: 4,
      title: "Pending Requests",
      price: "18",
      color: "card border-left-warning shadow h-100 py-2",
      icon: "fas fa-comments fa-2x text-gray-300",
      textcolor: "text-xs font-weight-bold text-warning text-uppercase mb-1",
    },
  ];
console.log("dash");
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
     
      </div>

      <div className="row">
       

        {item.map((e) => {
          return <Card item={e} />;
        })}
      </div>
    </>
  );
}

export default DashBoard;
