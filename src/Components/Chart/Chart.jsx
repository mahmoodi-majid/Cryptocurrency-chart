import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, Tooltip ,ResponsiveContainer } from 'recharts';

export default function Chart({data, dataKey, title, grid}) {
  console.log(data)
  console.log(dataKey)
  console.log(grid)
  return (
    <div className="chart">
    <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <Line dataKey={dataKey} stroke="#5550bd" />
          <XAxis dataKey="name" stroke="#5550bd" />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
