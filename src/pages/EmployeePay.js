import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import StatementPage from './StatementPage';

const dummy = {
    "number" : 10236,
    "name" : "이의찬",
    "year" : 2022,
    "month" : 10,
};

const EmployeePay = () => {

    const [name, SetName] = useState(dummy.name);
    const [number, SetNumber] = useState(dummy.number);
    const [year, setYear] = useState(dummy.year);
    const [month, setMonth] = useState(dummy.month);

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
                <StatementPage />
            <Bottom>
                <button onClick={() => window.open('http://localhost:3000/statement', '_blank')}>전자명세서 발급</button>
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