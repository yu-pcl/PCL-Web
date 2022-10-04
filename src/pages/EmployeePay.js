import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


const dummy = {
    "number" : 10236,
    "name" : "이의찬",
    "year" : 2022,
    "month" : 10,
    "basicPay" : 4000000,
    "deliveryFee": 5000000,
    "pension": 235600,
    "health": 203000,
    "employment": 203000,
    "occupational" :203000,   
};


const EmployeePay = () => {
    const [name, SetName] = useState(dummy.name);
    const [number, SetNumber] = useState(dummy.number);
    const [year, setYear] = useState(dummy.year);
    const [month, setMonth] = useState(dummy.month);
    const [basicPay, setBasicPay] = useState(dummy.basicPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [deliveryFee, setDeliveryFee] = useState(dummy.deliveryFee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [pension, setPension] = useState(dummy.pension.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [health, setHealth] = useState(dummy.health.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [employment, setEmployment] = useState(dummy.employment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [occupational, setOccupational] = useState(dummy.occupational.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [payTotal, setPayTotal] = useState((dummy.basicPay+dummy.deliveryFee).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [insuranceTotal, setInsuranceTotal] = useState((dummy.pension+dummy.health+dummy.employment+dummy.occupational).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    const [Total, setTotal] = useState((dummy.basicPay+dummy.deliveryFee-dummy.pension-dummy.health-dummy.employment-dummy.occupational).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    return (
        <Container>
            <Content>
            <Top>
                <div>
                    <h4 className='number'>{number}</h4>
                    <h4>{name} 님</h4>
                </div>
                <div>
                    <h4>{year}년</h4>
                    <h4>{month}월 급여명세서</h4>
                </div>
                    
                <div>
                    <p>이전</p>
                    <p>다음</p>
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
                                    <p>{basicPay}</p>
                                </Money>
                                <Money>
                                    <p>택배비</p>
                                    <p>{deliveryFee}</p>
                                </Money>
                            </div>
                            <Money>
                                <p>급여계</p>
                                <p>{payTotal}</p>
                            </Money>
                        </div>
                    </div>
                    <div className='boxRight'>
                        <div className='text'>
                            <p className='title'>공제액</p>
                            <div className='moneyBox'>
                                <Money>
                                    <p>국민연금</p>
                                    <p>{pension}</p>
                                </Money>
                                <Money>
                                    <p>건강보험</p>
                                    <p>{health}</p>
                                </Money>
                                <Money>
                                    <p>고용보험</p>
                                    <p>{employment}</p>
                                </Money>
                                <Money>
                                    <p>산재보험</p>
                                    <p>{occupational}</p>
                                </Money>
                            </div>
                            <Money>
                                <p>공제합계</p>
                                <p>{insuranceTotal}</p>
                            </Money>
                        </div>
                    </div>
                </div>
                <div className='boxBottom'>
                    <div>
                        <p>차감수령액</p>
                        <p>{Total}</p>
                    </div>
                </div>
            </Box>
            <Bottom>
                <button>전자명세서 발급</button>
            </Bottom>
            </Content>
        </Container>
    );
};

export default EmployeePay;

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const Content = styled.div`
    width: 60vw;
    height: 80vh;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;

`
const Top = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;

    div{
        display : flex;
    }
    h4{
        margin-right: 5px;
    }
    .number{
        color: #007200;
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
const Bottom = styled.div`
    align-self:end;

    button{
        width: 200px;
        height: 40px;
        background: none;
        border: 2px solid #007200;
        border-radius: 5px;
        text-align: center;
    }
`