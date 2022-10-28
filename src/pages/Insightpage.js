import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
const dummy = {
    "monthlySales" : 263000000,
    "dailySales" : 3700000
};

const Insight = () => {
    const [monthlySales, SetMonthlySales] = useState(dummy.monthlySales);
    const [dailySales, SetDailySales] = useState(dummy.dailySales);

    return (
        <Container>
            <Content>
                <TopContent>
                    <div className='box'>일러스트</div>
                </TopContent>
                <MiddleContent>
                    <div className='box left'></div><div className='box right'></div>
                </MiddleContent>
                <BottomContent>
                    <div className='box left'>택배 수 차트</div>
                    <div className='right'>
                        <div className='box right1'>
                            <p>₩</p>
                            <h3 className='sales'>{monthlySales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                            <h5>이달의 매출</h5>
                        </div>
                        <div className='box right2'>
                            <p>₩</p>
                            <h3 className='sales'>{dailySales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                            <h5>오늘의 매출</h5>
                        </div>
                    </div>
                </BottomContent>
            </Content>
        </Container>
    );
};

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
    }
`;

const MiddleContent = styled.div`
    width: 60vw;
    height: 40vh;
    display : flex;
    justify-content: space-between;

    .left{
        width: 34vw;
    }
    
    .right{
        width: 24vw;
    }
`;

const BottomContent = styled.div`
    width: 60vw;
    height: 24vh;
    display: flex;
    justify-content: space-between;

    .left{
        width: 34vw;
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

            p{
                background: #F5F5F5 0% 0% no-repeat padding-box;
                border-radius: 11px;
                color : #0072006E;
                padding: 2px;
                margin-left: 1vw;
                align-self: start;
            }
        }
        
        .right2{
            width: 11vw;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            p{
                background: #F5F5F5 0% 0% no-repeat padding-box;
                border-radius: 11px;
                color : #0072006E;
                padding: 2px;
                margin-left: 1vw;
                align-self: start;
            }
        }

        .sales{
            padding: 5px;
            background: #0072006E 0% 0% no-repeat padding-box;
            border-radius: 11px;
        }
    }
`;