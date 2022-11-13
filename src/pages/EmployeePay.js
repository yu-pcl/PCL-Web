import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import StatementPage from './StatementPage';
import { getCookie, setCookie } from './Cooke';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';

const dummy = {
    "year" : 2022,
    "month" : 10,
};

const EmployeePay = () => {
    let fullname=getCookie("fullname");
    let worker_id = getCookie("worker_id");
    const [year, setYear] = useState(dummy.year);
    const [month, setMonth] = useState(dummy.month);
    const [yearMonth, setYearMonth] = useState(dummy.year.toString()+dummy.month.toString());

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
        setCookie("yearMonth", yearMonth);
        console.log(yearMonth);
    }, [month])

    return (
        <Container>
            <Content>
                <Top>
                    <div>
                        <h4 className='number'>{worker_id}</h4>
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
                    <StatementPage />
                <Bottom>
                    <button onClick={() => window.open('http://acslab.toygoon.com:8080/', '_blank')}>전자명세서 발급</button>
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