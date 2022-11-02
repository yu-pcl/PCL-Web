import React from 'react';
import '../styles/MemberAdd.css';
import logo from '../assets/logo.png';
import memberpic from '../assets/member_pic.jpeg';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RESISTER_USER } from '../pages/user_type';

const MemberAdd = () => {

    const [worker_id, setworker_id] = useState("");
    const [fullname, setfullname] = useState("");
    const [password, setpassword] = useState("");
    const [is_superuser, setis_superuser] = useState(false);
    const dispatch = useDispatch()


    function registerWorker(dataToSubmit){
        const request = axios.post("http://acslab.toygoon.com:8000/api/register/",dataToSubmit)
            .then(function(response){
                console.log(response.data);
            });
            return{
                type: RESISTER_USER,
                payload:request
            }
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        let body = {
            worker_id:worker_id,
            password:password,
            fullname:fullname,
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
    const onSuperuserHandler=(event)=>{
        setis_superuser(!is_superuser);
    }

    return (
        <div className='wwrap'>
            <div className='up'>
                <span className='member_pic'><img src={memberpic} /></span>
                <span className='logogo'><img src={logo} /></span>
            </div>
            <form className='member_input' onSubmit={onSubmitHandler}>
                <div className='inputs'>
                    <input placeholder='사원번호' type="string" value={worker_id} onChange={onIdHandler}/>
                    <input placeholder='비밀번호' type="string" value={password} onChange={onPWHandler}/>
                    <input placeholder='실명' type="string" value={fullname} onChange={onFullnameHandler}/>
                    <span>
                        <input type="radio" checked={is_superuser}  onChange={onSuperuserHandler}/>
                        <p>관리자</p>
                    </span>
                    
                </div>
                <span className='member_btn'>
                    <button type='submit'formAction='' >등록</button>
                    <button>삭제</button>
                </span>

            </form>

        </div>
    );


};

export default MemberAdd;