import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

let sales_data=[];
const FinanceGraph = () => {
    const [sales_list,set_sales_list]=useState([]);
    const [employee_count_list,set_employee_count_list]=useState();

    useEffect(()=> {
        fetch('http://acslab.toygoon.com:8000/api/insight/', {
            method : "GET"   
        }).then(res=>res.json()).then(res=>{
            set_sales_list(res.sales_list);   
            set_employee_count_list(res.employee_count_list); 
            for(let i=0;i<5;i++){
                sales_data.push(res.sales_list[i].sales);
            }
        });              
    }, []);
    return(
        <div>
            <GraphData></GraphData>
        </div>
    )
};
const GraphData=()=>{
    let data =  {
        labels: ['7', '8', '9', '10', '11' ],
        datasets: [
          {
            type: 'line',
            label: '매출',
            backgroundColor: '#007200',
            data: sales_data,
            borderColor: '#007200',
            borderWidth: 2,
          },
        ],
      };
      return (
          <div>
              <Line type="line" data={data} />
          </div>
      );
}

export default FinanceGraph;