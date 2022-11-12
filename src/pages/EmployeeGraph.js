import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';


let employee_number_arr=[];
let employee_month_arr=[];

const EmployeeGraph = () => {
    const [employee_count_list,set_employee_count_list]=useState([]);

    useEffect(()=> {
        fetch('http://acslab.toygoon.com:8000/api/insight/', {
            method : "GET"   
        }).then(res=>res.json()).then(res=>{
            set_employee_count_list(res.employee_count_list); 
            for(let i=0;i<5;i++){
                employee_number_arr.push(res.employee_count_list[i].employees);
                employee_month_arr.push(res.employee_count_list[i].month);
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
        labels:employee_month_arr,
        datasets: [
          {
            type: 'line',
            label: '매출',
            backgroundColor: '#007200',
            data: employee_number_arr,
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

export default EmployeeGraph;

