import React from "react";
import Features from "../../Components/Features/Features";
import "./Home.css";
import Chart from "../../Components/Chart/Chart";
import xAxisData from "../../data";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
    </div>
  );
}
