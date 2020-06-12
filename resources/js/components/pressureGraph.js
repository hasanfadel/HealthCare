import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class PressureGraph extends Component {

  render() {
    return (
      <BarChart
        width={400}
        height={250}
        data={this.props.stats}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="systolic" fill="#8884d8" />
        <Bar dataKey="diastolic" fill="#82ca9d" />
      </BarChart>
    );
  }
}

