import React, { useEffect } from 'react';
import '../styles/MemberAdd.css';
import logo from '../assets/logo.png';
import memberpic from '../assets/member_pic.jpeg';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RESISTER_USER } from '../pages/user_type';

import { setCookie,getCookie } from './Cooke';
const MemberModify = () => {

    const [worker_id, setworker_id] = useState("");
    const [fullname, setfullname] = useState("");
    const [password, setpassword] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [is_superuser, setis_superuser] = useState(false);
    const dispatch = useDispatch()

        useEffect(()=> {

            let modify_target_id = prompt("수정할 사원 번호를 입력하세요.");
            setCookie("modify_worker_id",`${modify_target_id}`);
            fetch(`http://acslab.toygoon.com:8000/api/modify/${modify_target_id}`, {
                method : "GET"   
            }).then(res=>res.json()).then(res=>{
                setworker_id(res.worker_id);
                setfullname(res.fullname);
                setemail(res.email);
                setpassword(res.password);
                setphone(res.phone);
                setis_superuser(res.is_superuser);
            });              
        }, []);
    

    function registerWorker(dataToSubmit){
        let modify_worker_id=getCookie("modify_worker_id");
        const request = axios.post(`http://acslab.toygoon.com:8000/api/modify/${modify_worker_id}`,dataToSubmit)
            .then(function(response){
                console.log(response.data);
                if(response.data.result!==undefined){
                    alert('직원 수정 성공');
                    document.location.href = '/manage';
                }
            });
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        let body = {
            worker_id:worker_id,
            password:password,
            fullname:fullname,
            email:email,
            phone:phone,
            is_superuser,is_superuser,
        }
        dispatch(registerWorker(body));
    }
    const onIdHandler=(event)=>{
        setworker_id(event.currentTarget.value);
    }
    const onFullnameHandler=(event)=>{
        setfullname(event.currentTarget.value);
    }
    const onPWHandler=(event)=>{
        setpassword(event.currentTarget.value);
    }
    const onPhoneHandler=(event)=>{
        setphone(event.currentTarget.value);
    }
    const onEmailHandler=(event)=>{
        setemail(event.currentTarget.value);
    }
    const onSuperuserHandler=(event)=>{
        setis_superuser(!is_superuser);
    }

    return (
        <div className='wwrap'>
            <div className='up'>
                <span className='logogo'><img src={logo} /></span>
            </div>
            <form className='member_input' onSubmit={onSubmitHandler}>
                <div className='inputs'>
                    <input placeholder='이름' type="string" value={fullname} onChange={onFullnameHandler}/>
                    <input placeholder='사원번호' type="string" value={worker_id} onChange={onIdHandler}/>
                    <input placeholder='비밀번호' type="string" value={password} onChange={onPWHandler}/>
                    <input placeholder='전화번호' type="string"value={phone} onChange={onPhoneHandler}/>
                    <input placeholder='이메일' type="string"value={email} onChange={onEmailHandler}/>
                    <span>
                        <input type="radio" checked={is_superuser}  onChange={onSuperuserHandler}/>
                        <p>관리자</p>
                    </span>
                    
                </div>
                <span className='member_btn'>
                    <button type='submit'formAction='' >수정</button>
                </span>

            </form>

        </div>
    );


};

export default MemberModify;