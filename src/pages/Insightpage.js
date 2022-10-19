import React from 'react';
import styled from 'styled-components';

const Insight = () => {
    return (
        <Container>
            <Content>
                <TopContent>
                    <div className='box'>일러스트</div>
                </TopContent>
                <MiddleContent>
                    <div className='box left'>재정현황 그래프</div>
                    <div className='box right'>직원 수 그래프</div>
                </MiddleContent>
                <BottomContent>
                    <div className='box left'>택배 수 차트</div>
                    <div className='right'>
                        <div className='box right1'>이달의 매출</div>
                        <div className='box right2'>오늘의 매출</div>
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
        }
        
        .right2{
            width: 11vw;
        }
    }
`;