import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import StatementPage from './StatementPage';



const EmployeePay = () => {

    return (
        <Container>
            <Content>
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