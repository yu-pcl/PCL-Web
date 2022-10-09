import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const LoginPage = () => {
/*
    function LoginAxios(data){
        const login_url = 'http://acslab.toygoon.com:8080/signin';
        const userinfo ={
            worker_id:data.worker_id,
            password:data.password,
        }    
        axios.post(login_url,userinfo)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    */
   
return (
    <Container>
        <LeftContent></LeftContent>
        <RightContent>
            <form>
                <h1>로그인</h1>
                <div>
                <input
                    name = 'worker_id'
                    placeholder='사원번호'
                />
                <input
                    name = 'password'
                    placeholder='비밀번호'
                />
                </div>
                <input type='submit' value="로그인" onClick={()=>LoginAxios()}/>
            </form>
            </RightContent>
        </Container>
        
    );
};

const Container = styled.div`
width : 100vw;
height : 90vh;
display : flex;
justify-content: center;
align-items: center;
`;
const LeftContent = styled.div`
width : 55%;
height : 90vh;
background-color : #D1CFC9;
`;
const RightContent = styled.div`
width : 45%;
height : 90vh;
display : flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;


form{
    height : 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items : center;
    
    h1{
        font-size : 22px;
    }

    div{
    height : 20vh;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;
    }
};
input{
    width: 295px;
    height: 40px;
    text-align: left;
    color: #060A0E;
    opacity: 1;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border : 0px;
    opacity: 1;
    padding: 0px;
    padding-left: 5px;
}
input[type="submit"]{
    color: white;
    cursor : pointer;
    text-align: center;
    width: 300px;
    height: 40px;
    background: #007200BA 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border : 0px;
    opacity: 1;
}
`;

export default LoginPage;