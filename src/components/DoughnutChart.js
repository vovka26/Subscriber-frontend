import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {
  return (
    <div>
      <h2 className='chart-text'>Category Spendings</h2>
      <Doughnut data={props.data} />
    </div>
  );
}

export default DoughnutChart