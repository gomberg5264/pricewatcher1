import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import { getDates, getMaxPrice, getMinPrice, getFormattedText } from '../utils/utils';
import './SingleWatcher.css';

export default function SingleWatcher(props) {
  const [chartFilter, setChartFilter] = useState('daily');
  const details = props.location.state.details;
  const data = details.pastPrices;
  const dates = getDates(data, chartFilter);
  console.log(dates);
  // const Xticks = data.map(ele => ele.date)
  const renderLineChart = (
    <AreaChart
      width={600}
      height={350}
      data={dates}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      {/* <Line type="monotone" dataKey="price" stroke="#06d69e" /> */}
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      <XAxis dataKey="date" stroke="#333" />
      <YAxis stroke="#333" />
      <Area type="monotone" dataKey="price" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      <Tooltip />
    </AreaChart>
  );
  return (
    <div className="single-watcher-wrapper">
      <h2 className="chartTitle">{getFormattedText(details.title, 50)}</h2>
      {/* <h3 className="lighten">Price Graph</h3> */}
      <select value={chartFilter} onChange={(e) => setChartFilter(e.target.value)}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <div className="chart-wrapper">{renderLineChart}</div>
      <div>Maximum Price : {getMaxPrice(data)}</div>
      <div>Minimum Price : {getMinPrice(data)}</div>
    </div>
  );
}
