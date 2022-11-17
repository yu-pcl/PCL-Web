import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import StatementPage from './StatementPage';
import { getCookie, setCookie } from './Cooke';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';
import axios from 'axios';

const dummy = {
    "year" : 2022,
    "month" : 10,
};

const EmployeePay = () => {
    let fullname=getCookie("fullname");
    let id = getCookie("worker_id");
    setCookie("search_id", getCookie("worker_id"));
    const [year, setYear] = useState(dummy.year);
    const [month, setMonth] = useState(dummy.month);
    const [yearMonth, setYearMonth] = useState(dummy.year.toString()+dummy.month.toString());
    const [basicPay, setBasicPay] = useState([]);
    const [deliveryFee, setDeliveryFee] = useState([]);
    const [pension, setPension] = useState([]);
    const [health, setHealth] = useState([]);
    const [employment, setEmployment] = useState([]);
    const [occupational, setOccupational] = useState([]);
    const [payTotal, setPayTotal] = useState([]);
    const [insuranceTotal, setInsuranceTotal] = useState([]);
    const [total, setTotal] = useState([]);

    const handleClickLeftButton = ()=>{
        if (month === 1){
            setYear(year-1);
            setMonth(12);
        } else {
            setMonth(month-1);
        }     
    };

    const handleClickRightButton = ()=>{
        if (month === 12){
            setYear(year+1);
            setMonth(1);
        } else {
            setMonth(month+1);
        }
    };

    useEffect(() => {
        setYearMonth(year.toString()+month.toString());
    }, [month])

    useEffect(() => {
        console.log(id);
        console.log(yearMonth);
        setCookie("yearMonth", yearMonth);
        axios.post(`http://acslab.toygoon.com:8000/api/employ/${id}`,
            {
                month : yearMonth
            })
            .then(function(res){
                setBasicPay(res.data.money_base);
                setDeliveryFee(res.data.money_parcel);
                setPension(res.data.money_pension);
                setHealth(res.data.money_health);
                setEmployment(res.data.money_employ);
                setOccupational(res.data.money_accident);
                setPayTotal(res.data.money_base+res.data.money_parcel);
                setInsuranceTotal(res.data.money_pension+res.data.money_health+res.data.money_employ+res.data.money_accident);
                setTotal(res.data.money_base+res.data.money_parcel-(res.data.money_pension+res.data.money_health+res.data.money_employ+res.data.money_accident));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [yearMonth]);

    return (
        <Container>
            <Content>
                <Top>
                    <div>
                        <h4 className='number'>{id}</h4>
                        <h4>{fullname} 님</h4>
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
                <Bottom>
                    <button onClick={() => window.open('http://acslab.toygoon.com:8080/statement', '_blank')}>전자명세서 발급</button>
                    {/* <button onClick={() => window.open('http://localhost:3000/statement', '_blank')}>전자명세서 발급</button> */}
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