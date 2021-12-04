import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    price: 500,
  },
  {
    name: "Feb",
    price: 1000,
  },
  {
    name: "Mar",
    price: 5000,
  },
  {
    name: "Apr",
    price: 6365,
  },
  {
    name: "May",
    price: 7840,
  },
  {
    name: "Jun",
    price: 6728,
  },
  {
    name: "Jul",
    price: 9560,
  },
  {
    name: "Aug",
    price: 3420,
  },
  {
    name: "Sep",
    price: 2045,
  },
  {
    name: "Oct",
    price: 5342,
  },
  {
    name: "Nov",
    price: 4120,
  },
  {
    name: "Dec",
    price: 5090,
  },
];

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        data={data}
        margin={{
          top: 0,
          right: 40,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          horizontal="true"
          vertical=""
          stroke="#243240"
          strokeWidth={0.5}
        />
        <XAxis
          dataKey="name"
          tick={{ fill: "black" }}
          strokeWidth={1}
          axisLine={false}
        />
        <YAxis
          tick={{ fill: "black" }}
          strokeWidth={0.5}
          axisLine={{ stroke: "#EAF0F4" }}
          tickLine={{ stroke: "#EAF0F4" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgb(245, 107, 130)",
            color: "#fff",
            alignContent: "center",
          }}
          itemStyle={{ color: "#fff" }}
          cursor={false}
          strokeWidth={10}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="rgb(245, 107, 130)"
          strokeWidth="2"
          dot={{
            fill: "#2e4355",
            stroke: "rgb(245, 107, 130)",
            strokeWidth: 1,
            r: 0,
          }}
          activeDot={{
            fill: "#2e4355",
            stroke: "rgb(245, 107, 130)",
            strokeWidth: 5,
            r: 3,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
