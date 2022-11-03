import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const StatementPage = () => {
    const [basicPay, setBasicPay] = useState([]);
    const [deliveryFee, setDeliveryFee] = useState([]);
    const [pension, setPension] = useState([]);
    const [health, setHealth] = useState([]);
    const [employment, setEmployment] = useState([]);
    const [occupational, setOccupational] = useState([]);
    const [payTotal, setPayTotal] = useState([]);
    const [insuranceTotal, setInsuranceTotal] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(()=> {
        fetch('http://acslab.toygoon.com:8000/api/employ/1000', {
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

    return (
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
    );
};

export default StatementPage;

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