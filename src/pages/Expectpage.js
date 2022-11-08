import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import boxIcon from '../assets/boxIcon.png';
import truckIcon1 from '../assets/truckIcon1.png';

const dummy ={
    "wish": 10000000,
    "freightCost": 5000000,
    "size1" : 50,
    "size2" : 80,
    "size3" : 20
}

const Expectpage = () => {
    const [wish, setWish] = useState(dummy.wish);
    const [freightCost, setFreightCost] = useState(dummy.freightCost);
    const [difference, setDifference] = useState(dummy.wish-dummy.freightCost);
    const [size1,setSize1] = useState(dummy.size1);
    const [size2,setSize2] = useState(dummy.size2);
    const [size3,setSize3] = useState(dummy.size3);
    
    
    return (
        <Container>
            <Box>
                <div className='boxTop'>
                    <div className='topContent'>
                        <h2>목표 급여</h2>
                        <div className='wish'>
                            <h1>{wish.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                            <h2>원</h2>
                        </div>
                        <img src={truckIcon1}/>
                    </div>
                    <div className='line'></div>
                </div>
                <div className='boxBottom'>
                    <div className='table'>
                        <div className='title'>
                            <div className='bar'></div>
                            <h2>누적 운임비</h2>
                        </div>
                        <h2 className='money'>{freightCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    </div>
                    <div className='table'>
                        <div className='title'>
                            <div className='bar'></div>
                            <h2>잔여 금액</h2>
                        </div>
                        <h2 className='money'>{difference.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    </div>
                    <div className='predict'>
                        <div className='bar'></div>
                        <h2>예측 배송량</h2>
                    </div>
                    <div className='boxs'>
                        <div className='size '>
                            <h2>1호</h2>
                            <img src={boxIcon} className='one'/>
                            <h2>{size1}건</h2>
                        </div>
                        <div className='size'>
                            <h2>2호</h2>
                            <img src={boxIcon} className='two'/>
                            <h2>{size2}건</h2>
                        </div>
                        <div className='size'>
                            <h2>3호</h2>
                            <img src={boxIcon} className='three'/>
                            <h2>{size3}건</h2>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default Expectpage;

const Container = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Box = styled.div`
    width: 65vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 3px 6px #00000029;
    
    .boxTop{
        width: 65vw;
        height: 18vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #CBD1CB60 0% 0% no-repeat padding-box;
        
        .topContent{
            height: 10vh;
            width: 55vw;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2{
                color: #007200;
            }

            .wish{
                width: 20vw;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
    
                h1{
                    background: #FFFFFF96 0% 0% no-repeat padding-box;
                    border-radius: 38px;
                    padding: 13px;
                }
            }
    
            img{
                width: 145px;
                height: 120px;
            }
        }
        .line{
            background: #000000 0% 0% no-repeat padding-box;
            width: 50vw;
            height: 2px;
            align-self: start;
            margin-left: 5vw;
            margin-top: 1vh;
        }
    }

    .boxBottom{
        width: 65vw;
        height: 57vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: white 0% 0% no-repeat padding-box;

        .bar{
            background: #0072003E 0% 0% no-repeat padding-box;
            border-radius: 38px;
        }

        .table{
            width: 50vw;
            display: flex;
            justify-content: space-between;

            .title{
                width: 10vw;
                height: 10vh;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start;

                .bar{
                    width: 8vw;
                    height: 1vh;
                }
            }
            
            .money{
                align-self: flex-end;
            }
        }

        .predict{
            width: 50vw;
            height: 10vh;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            align-items: flex-start;

            .bar{
                width: 50vw;
                height: 1vh;
            }
        }

        .boxs{
            width: 50vw;
            height: 24vh;
            display: flex;
            justify-content: flex-end;
            padding-bottom: 3vh;

            .size{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                padding-right: 20px;

                .one{
                    width: 75px;
                    height: 75px;
                }
                .two{
                    width: 100px;
                    height: 100px;
                }
                .three{
                    width: 150px;
                    height: 150px;
                }
            }
        }
`