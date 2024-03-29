import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import EmployeeGraph from './EmployeeGraph';
import insight_image from '../assets/insight_image.jpeg';
import { Line } from 'react-chartjs-2';

let sales_data_arr=[];
let month_data_arr=[];
let employee_number_arr=[];
let employee_month_arr=[];

const Insight = () => {
    const [size1, setSize1] = useState([]);
    const [size2, setSize2] = useState([]);
    const [size3, setSize3] = useState([]);
    const [monthlySales, setMonthlySales] = useState([]);
    const [dailySales, setDailySales] = useState([]);

    const [sales_list,set_sales_list]=useState([]);
    const [employee_count_list,set_employee_count_list]=useState([]);
    useEffect(()=> {
        fetch('http://acslab.toygoon.com:8000/api/insight/', {
            method : "GET"   
        }).then(res=>res.json()).then(res=>{
            setSize1(res.size_list.size_one);
            setSize2(res.size_list.size_two);
            setSize3(res.size_list.size_three);
            setMonthlySales(res.sales_month);
            setDailySales(res.sales_today);
            set_sales_list(res.sales_list);   
            for(let i=0;i<5;i++){
                sales_data_arr.push(res.sales_list[i].sales);
                month_data_arr.push(res.sales_list[i].month);
            }   
            set_employee_count_list(res.employee_count_list); 
            for(let i=0;i<5;i++){
                employee_number_arr.push(res.employee_count_list[i].employees);
                employee_month_arr.push(res.employee_count_list[i].month);
            }
        });              
    }, []);

    return (
        <Container>
            <Content>
                <TopContent>
                    <div className='box'>
                        <img src={insight_image} className="insight_image"/>
                    </div>
                </TopContent>
                <MiddleContent>
                    <div className='box left'>
                        <p>재정현황 그래프</p>
                        <FinanceGraphData></FinanceGraphData>
                    </div>
                    <div className='box right'>
                        <p>직원 수 그래프</p>
                        <EmployeeGraphData></EmployeeGraphData>
                    </div>
                </MiddleContent>
                <BottomContent>
                    <div className='box left'>
                        <h5>규격 별 택배 수 차트</h5>
                        <div className='charts'>
                            <div className='chart'>
                                <div className='chartTop'>
                                    <p>규격</p>
                                    <p>개수%</p>
                                </div>
                                <div className='chartMain'>
                                    <div className='size'>
                                        <div className='colors'>
                                            <p className='color1'></p>
                                            <p>1</p>
                                        </div>
                                        <p>1호</p>
                                        <p>{size1}</p>
                                    </div>
                                    <div className='size'>
                                        <div className='colors'>
                                            <p className='color2'></p>
                                            <p>2</p>
                                        </div>
                                        <p>2호</p>
                                        <p>{size2}</p>
                                    </div>
                                    <div className='size'>
                                        <div className='colors'>
                                            <p className='color3'></p>
                                            <p>3</p>
                                        </div>
                                        <p>3호</p>
                                        <p>{size3}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pieChart'>
                                <PieChart
                                data={[
                                    { title: 'One', value: size1, color: '#007200' },
                                    { title: 'Two', value: size2, color: '#C13C37' },
                                    { title: 'Three', value: size3, color: '#FFBA35' },
                                ]}
                                lineWidth={20}
                                radius={40}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='box right1'>
                            <h4>₩</h4>
                            <h3 className='sales'>{monthlySales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                            <h5>이달의 매출</h5>
                        </div>
                        <div className='box right2'>
                            <h4>₩</h4>
                            <h3 className='sales'>{dailySales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                            <h5>오늘의 매출</h5>
                        </div>
                    </div>
                </BottomContent>
            </Content>
        </Container>
    );
};
const FinanceGraphData=()=>{
    let data =  {
        labels: month_data_arr,
        datasets: [
          {
            type: 'line',
            label: '매출',
            backgroundColor: '#007200',
            data: sales_data_arr,
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
const EmployeeGraphData=()=>{

    let data =  {
        labels:employee_month_arr,
        datasets: [
          {
            type: 'bar',
            label: '직원 수',
            backgroundColor: 'rgb(353,186,53)',
            data: employee_number_arr,
            borderColor: 'rgb(353,186,53)',
            borderWidth: 1,
          },
        ],
      };
      return (
          <div>
              <Line type="line" data={data} />
          </div>
      );
}
export default Insight;

const Container = styled.div`
    width : 100vw;
    height : 90vh;
    display : flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    width: 60vw;
    height: 88vh;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;

    .box{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;

    }
    

`

const TopContent = styled.div`
    width: 60vw;
    height: 16vh;
    display : flex;

    .box{
        width: 60vw;
        overflow: hidden;
        position: relative;
    }
    .insight_image{
        position: absolute;
        width: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
`;




const MiddleContent = styled.div`
    width: 60vw;
    height: 45vh;
    display : flex;
    justify-content: space-between;

    .left{
        width: 34vw;

    }
    .left p{
        margin-top:2vh;
        margin-bottom:2vh;
        font-weight: bold;
    }
    
    .right{
        width: 24vw;
    }
    .right p{

        margin-top:2vh;
        margin-bottom:5vh;
        font-weight: bold;
    }
`;

const BottomContent = styled.div`
    width: 60vw;
    height: 24vh;
    display: flex;
    justify-content: space-between;

    .left{
        width: 34vw;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        h5{
            width: 31vw;
            height: 4vh;
            display: flex;
            border-bottom: 1px solid #70707029;
            align-items: center;
            padding-left: 1vw;
        }
        .charts{
            display: flex;
            width: 34vw;
            height: 20vh;
            justify-content: space-evenly;
            align-items: center;

            .chart{
                width: 15vw;
                height: 15vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
    
                .chartTop{
                    width: 13vw;
                    height: 3vh;
                    display: flex;
                    justify-content: space-evenly;
                    padding-left: 5vw;
                    background: #F5F5F5 0% 0% no-repeat padding-box;
                    border-radius: 11px;
                    color: #060A0E89;
                }
    
                .chartMain{
                    width: 13vw;
                    height: 12vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
    
                    .size{
                        width: 12vw;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        
                        .colors{
                            width: 2vw;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;


                            .color1{
                                width: 10px;
                                height: 10px;
                                background: #007200 0% 0% no-repeat padding-box;
                            }
                            .color2{
                                width: 10px;
                                height: 10px;
                                background: #C13C37 0% 0% no-repeat padding-box;
                            }
                            .color3{
                                width: 10px;
                                height: 10px;
                                background: #FFBA35 0% 0% no-repeat padding-box;
                            }
                        }
                        
                    }
                }
            }
            
            .pieChart{
                width: 10vw;
                height: 20vh;
            }
        }
    }

    .right{
        display: flex;
        width: 24vw;
        justify-content: space-between;

        .right1{
            width: 11vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        
        .right2{
            width: 11vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        
        h4{
            background: #F5F5F5 0% 0% no-repeat padding-box;
            border-radius: 11px;
            color : #0072006E;
            padding: 4px;
            margin-left: 1vw;
            align-self: start;
        }

        .sales{
            padding: 5px;
            background: #0072006E 0% 0% no-repeat padding-box;
            border-radius: 11px;
        }
    }
`;
