import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "$",
    Number: 4,
    amt: 2400
  },
  {
    name: "$$",
    Number: 31,
    amt: 2210
  },
  {
    name: "$$$",
    Number: 64,
    amt: 2290
  },
  {
    name: "$$$$",
    Number: 20,
    amt: 2000
  }
];

const getIntroOfPage = label => {
  if (label === "$") {
    return "Average rating: 4.15";
  }
  if (label === "$$") {
    return "Average rating: 4.19";
  }
  if (label === "$$$") {
    return "Average rating: 4.19";
  }
  if (label === "$$$$") {
    return "Average rating: 4.16";
  }
};

const getInfo = label => {
  if (label === "$") {
    return "Average price: 188 ₹";
  }
  if (label === "$$") {
    return "Average price: 734 ₹";
  }
  if (label === "$$$") {
    return "Average price: 1455 ₹";
  }
  if (label === "$$$$") {
    return "Average price: 2990 ₹";
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Number of Resturants : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">{getInfo(label)}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <BarChart
        width={1200}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Bar dataKey="Number" fill="#AB9050" />
      </BarChart>
    );
  }
}
