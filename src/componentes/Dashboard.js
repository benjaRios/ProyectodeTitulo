import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Sidebar from './Sidebar';

export const Dashboard = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [15, 23, 35, 40, 29, 10, 30, 11],
      },
    ],
  })
  return (
    <div>
      <Sidebar />
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="500"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="500"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="500"
          />
        </div>
      </div>
    </div>
  )
}

  

export default Dashboard;