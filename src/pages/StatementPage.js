import React from 'react';
import styled from 'styled-components';
import { getCookie, setCookie } from './Cooke';
import { useState, useEffect, useCallback } from 'react';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';
import axios from 'axios';

const dummy = {
    "number" : 10236,
    "name" : "이의찬",
};

const StatementPage = () => {
    let worker_id = getCookie("worker_id");
    const [name, SetName] = useState(dummy.name);
    const [number, SetNumber] = useState(dummy.number);
    const [year, setYear] = useState(2022);
    const [month, setMonth] = useState(10);
    const [yearMonth, setYearMonth] = useState(202210);
    const [basicPay, setBasicPay] = useState([]);
    const [deliveryFee, setDeliveryFee] = useState([]);
    const [pension, setPension] = useState([]);
    const [health, setHealth] = useState([]);
    const [employment, setEmployment] = useState([]);
    const [occupational, setOccupational] = useState([]);
    const [payTotal, setPayTotal] = useState([]);
    const [insuranceTotal, setInsuranceTotal] = useState([]);
    const [total, setTotal] = useState([]);

    const handleClickLeftButton = useCallback(e=>{
        if (month === 1){
            setYear(year-1);
            setMonth(12);
        } else {
            setMonth(month-1);
            console.log(month);
            console.log(yearMonth)
        }
        
    }, []);

    const handleClickRightButton = useCallback(e=>{
        if (month === 12){
            setYear(year+1);
            setMonth(1);
        } else {
            setMonth(month+1);
            console.log(month);
        }
    }, []);

    useEffect(()=> {
        fetch(`http://acslab.toygoon.com:8000/api/employ/${worker_id}`, {
            method : "GET"   
        }).then(res=>res.json()).then(res=>{
            setBasicPay(res.money_base);
            setDeliveryFee(res.money_parcel);
            setPension(res.money_pension);
            setHealth(res.money_health);
            setEmployment(res.money_employ);
            setOccupational(res.money_accident);
            setPayTotal(res.money_base+res.money_parcel);
            setInsuranceTotal(res.money_pension+res.money_health+res.money_employ+res.money_accident);
            setTotal(res.money_base+res.money_parcel-(res.money_pension+res.money_health+res.money_employ+res.money_accident));
        });              
    }, []);

    const handleYearMonth = useCallback(() => {
        axios.post("http://acslab.toygoon.com:8000/api/employ/",
            {
                worker_id : 1000,
                month : yearMonth
            })
            .then(function(response){
                console.log(response);
                setBasicPay(response.money_base);
                setDeliveryFee(response.money_parcel);
                setPension(response.money_pension);
                setHealth(response.money_health);
                setEmployment(response.money_employ);
                setOccupational(response.money_accident);
                setPayTotal(response.money_base+response.money_parcel);
                setInsuranceTotal(response.money_pension+response.money_health+response.money_employ+response.money_accident);
                setTotal(response.money_base+response.money_parcel-(response.money_pension+response.money_health+response.money_employ+response.money_accident));
    
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [yearMonth]);

    return (
        <>
            <Top>
                <div>
                    <h4 className='number'>{number}</h4>
                    <h4>{name} 님</h4>
                </div>
                <div>
                    <h4>{year}년</h4>
                    <h4>{month}월 급여명세서</h4>
                </div>
                <div className='buttons'>
                    <button onClick={handleClickLeftButton}><img src={arrow_left}/>이전</button>
                    <button onClick={handleClickRightButton}>다음<img src={arrow_right}/></button>
                </div>
            </Top>
            <Box>
                <div className='boxTop'>
                    <div className='boxLeft'>
                        <div className='text'>
                            <p className='title'>지급액</p>
                            <div className='moneyBox'>
                                <Money>
                                    <p>기본급</p>
                                    <p>{basicPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Money>
                                <Money>
                                    <p>택배비</p>
                                    <p>{deliveryFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Money>
                            </div>
                            <Money>
                                <p>급여계</p>
                                <p>{payTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </Money>
                        </div>
                    </div>
                    <div className='boxRight'>
                        <div className='text'>
                            <p className='title'>공제액</p>
                            <div className='moneyBox'>
                                <Money>
                                    <p>국민연금</p>
                                    <p>{pension.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Money>
                                <Money>
                                    <p>건강보험</p>
                                    <p>{health.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Money>
                                <Money>
                                    <p>고용보험</p>
                                    <p>{employment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Money>
                                <Money>
                                    <p>산재보험</p>
                                    <p>{occupational.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                </Money>
                            </div>
                            <Money>
                                <p>공제합계</p>
                                <p>{insuranceTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </Money>
                        </div>
                    </div>
                </div>
                <div className='boxBottom'>
                    <div>
                        <p>차감수령액</p>
                        <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default StatementPage;

const Top = styled.div`
    width: 60vw;
    height: 5vh;
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

        div{
            display : flex;
        }
        h4{
            margin-right: 5px;
        }
        .number{
            color: #007200;
        }
        .buttons{
            width: 7vw;
            height: 5vh;
            justify-content: space-between;
            align-items: center;
            text-align : center;
        }
        img{
            width:20px;
            height:20px;
        }
    }
`

const Box = styled.div`
    width: 60vw;
    height: 65vh;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;

    .boxTop{
        display : flex;
        padding-top: 2vh;
        
        .boxLeft{
            width: 30vw;
            height: 54vh;
            display : flex;
            justify-content: center;
            border-right: 1px solid #000000B5;
        }
        .boxRight{
            width: 30vw;
            height: 54vh;
            display : flex;
            justify-content: center;
        }
        .text{
            width: 26vw;
            height: 50vh;
            display : flex;
            flex-direction: column;
            justify-content: space-between;

            .title{
                align-self: flex-start;
            }
            .moneyBox{
                height: 25vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
        }
    }
    
    .boxBottom{
        width: 56vw;
        height: 8vh;
        display : flex;
        align-items: center;
        border-top: 1px solid #000000B5;

        div{
            width: 56vw;
            display : flex;
            justify-content: space-between;
        }
    }
`
const Money = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2vh;
`