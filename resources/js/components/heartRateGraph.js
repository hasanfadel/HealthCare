import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class HeartRateGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    console.log('props heart', this.props.stats);
    return (
      <LineChart
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
        <Line type="monotone" dataKey="heart" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
