import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import search_img from '../assets/search.png';
import StatementPage from './StatementPage';

const dummy = {
    "number" : 10236,
    "name" : "이의찬",
    "year" : 2022,
    "month" : 10
};

const ManagerPay = () => {
    const [name, SetName] = useState(dummy.name);
    const [number, SetNumber] = useState(dummy.number);
    const [year, setYear] = useState(dummy.year);
    const [month, setMonth] = useState(dummy.month);
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
        <Container>
            <Content>
            <Search>
                <div>
                    <input
                        name = 'name'
                    />
                    <button className='search_img'><img src={search_img}/></button>
                </div>
            </Search>
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
            <StatementPage />
            <Bottom>
                <button onClick={() => window.open('http://localhost:3000/statement', '_blank')}>전자명세서 발급</button>
            </Bottom>
            </Content>
        </Container>
    );
};

export default ManagerPay;

const Container = styled.div`
    width: 100vw;
    height: 88vh;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const Content = styled.div`
    width: 60vw;
    height: 85vh;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;

`
const Search = styled.div`
    display : flex;
    justify-content: flex-end;
    margin : 1vh 0px;    

    div{
        display : flex;
        align-items: center;
        justify-content: space-evenly;
        width: 250px;
        height: 40px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 5px;
        opacity: 1;

        input{
            width: 200px;
            height: 30px;
        }
    }

    .search_img{
        width: 32px;
        height: 32px;
    }
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

const Bottom = styled.div`
    align-self:end;

    button{
        width: 200px;
        height: 40px;
        background: none;
        border: 2px solid #007200;
        border-radius: 5px;
        text-align: center;
        margin-top: 1vh;
    }
`