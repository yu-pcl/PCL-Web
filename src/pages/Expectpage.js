import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import boxIcon from '../assets/boxIcon.png';
import truckIcon1 from '../assets/truckIcon1.png';

const Expectpage = () => {
    const [wish, setWish] = useState([]);
    const [freightCost, setFreightCost] = useState([]);
    const [difference, setDifference] = useState([]);
    const [size1,setSize1] = useState([]);
    const [size2,setSize2] = useState([]);
    const [size3,setSize3] = useState([]);

    function onSubmitHandler(dataToSubmit){
        axios.post("http://acslab.toygoon.com:8000/api/regression/",
            {
                worker_id : 1000,
                wish : wish
            })
            .then(function(response){
                console.log(response.data);
                setFreightCost(response.salary)
                setDifference(response.wish)
                setSize1(response.size_one)
                setSize2(response.size_two)
                setSize3(response.size_three)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onWishHandler=(event)=>{
        setWish(event.currentTarget.value);
    }

    return (
        <Container>
            <Box>
                <div className='boxTop'>
                    <div className='topContent'>
                        <h2>목표 급여</h2>
                        <form onSubmit={onSubmitHandler(wish)}>
                            <div className='wish'>
                                <input placeholder='목표' type="string" value={wish} onChange={onWishHandler}/>
                                <button type='submit' formAction=''><h2>입력</h2></button>
                            </div>
                        </form>
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
    
                input{
                    background: #FFFFFF96 0% 0% no-repeat padding-box;
                    border-radius: 38px;
                    padding: 13px;
                }
                
                button{
                    
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