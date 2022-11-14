import React, { useEffect }from 'react';
import styled from 'styled-components';
import { useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import { LOGIN_USER } from './user_type';
import { json, Navigate } from 'react-router-dom';
import { setCookie,getCookie } from './Cooke';
import { useNavigate } from 'react-router-dom';
import login_image from '../assets/login_image.jpeg';


const LoginPage = () => {

    const [worker_id,Setworker_id]=useState("");
    const [password,Setpassword]=useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //로그인 post
    function loginUser(dataToSubmit){
        const request = axios.post('http://acslab.toygoon.com:8000/api/login/',dataToSubmit)
            .then(function(response){
                const worker_id=(response.data.worker_id);
                const access_token = response.data.token;
                const fullname = response.data.fullname;
                const is_superuser = response.data.is_superuser;

                setCookie("access_token",`${access_token}`);
                setCookie("worker_id",`${worker_id}`)
                setCookie("fullname",`${fullname}`)
                setCookie("is_superuser",`${is_superuser}`);

                //토큰 반환
                axios.defaults.headers.common['Authorization']=`Token ${access_token}`;
                
                //관리자용 급여 관리 페이지로 전환
                if(is_superuser===true){
                    document.location.href = '/manager';
                }
                else {
                    document.location.href = '/employee';
                }

            })
            .catch(function(error) {
                alert(error.request.responseText)
            });
            return{
                type:LOGIN_USER,
                payload:request
            }
        }
    const onIdHandler=(event)=>{
        Setworker_id(event.currentTarget.value);
    }
    const onPasswordHandler=(event)=>{
        Setpassword(event.currentTarget.value);
    } 
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        let body = {
            worker_id:worker_id,
            password:password,
        }
        dispatch(loginUser(body));

    }
return (
    <Container>
        <LeftContent>
            <img src={login_image} className="login_image"></img>
        </LeftContent>
        <RightContent>
            <form onSubmit={onSubmitHandler}>
                <h1>로그인</h1>
                <div>
                <input
                    type = 'text'
                    value={worker_id}
                    placeholder='사원번호'
                    onChange={onIdHandler}
                />
                <input
                    type = 'password'
                    value={password}
                    placeholder='비밀번호'
                    onChange={onPasswordHandler}
                />
                </div>
                <input type='submit' value="로그인" formAction='' />
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
background-color : #e3e2e1;
position: relative;
overflow:hidden;

.login_image{
    position: absolute;
    width: 130%;
    height:80%;
    left:0%;
    top:10%;
    transform: scaleX(-1);
}
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
        font-weight: bold;
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
    height: 50px;
    text-align: left;
    color: #060A0E;
    opacity: 1;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border : 0px;
    opacity: 1;
    padding: 0px;
    padding-left: 5px;
    font-weight: bold;
    padding-left:0.5vw;
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
    font-size:16px;
}
`;

export default LoginPage;