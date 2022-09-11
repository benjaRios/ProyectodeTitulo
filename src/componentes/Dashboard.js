import React, { useState } from 'react';
import Chart from "react-apexcharts";
import Drawerinfo from './Drawerinfo';


export const Dashboard = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {

        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      },
      title: { text: "Comparacion de Informacion"}
    },
    series: [
      {
        name: "Data 1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Data 2",
        data: [15, 23, 35, 40, 29, 10, 30, 11],
      },
    ],
  })
  return (
    
    <div class="main">
      
      <div class="row mt-4">
        <div class="col-md-5">
          <div class="box columnbox mt-4">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
        <div class="col-md-7">
          <div class="box  mt-4">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5">
          <div class="box radialbox mt-4">
            <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />
          </div>
        </div>
        <div class="col-md-7">
          <div class="box mt-4">
            <Chart
              type="pie"
              width="503"
              height="550"

              series={[45, 63, 68, 90, 78, 70, 100, 102]}

              options={ { 
                title: { text: "Total de las 2 Datas"},
                Nodata:{text:" Nada"},
                labels:["1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998"]

              }}
            


             /> 
          </div>
        </div>
      </div>
    </div>
  )
}

  

export default Dashboard;