import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
  return (
    <div>
      <h2 className='chart-text'>Category Spendings</h2>
      <Bar data={props.data} />
    </div>
  );
}

export default BarChart