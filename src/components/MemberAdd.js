import React from 'react';
import '../styles/MemberAdd.css';
import logo from '../assets/logo.png';
import memberpic from '../assets/member_pic.jpeg';
import { useState } from 'react';

const MemberAdd = () => {

    const [fullname, setfullname] = useState();
    const [worker_id, setworker_id] = useState();
    const [password, setpassword] = useState();
    const [is_superuser, setis_superuser] = useState();


    function addMember() {
        fetch('http://acslab.toygoon.com:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                worker_id: worker_id,
                password: password,
                fullname: fullname,
                is_superuser: is_superuser,
            }),
        })
            .then(res => res.json())
            .then(console.log(worker_id))
    }


    return (
        <div className='wwrap'>
            <div className='up'>
                <span className='member_pic'><img src={memberpic} /></span>
                <span className='logogo'><img src={logo} /></span>
            </div>
            <form className='member_input'>
                <div className='inputs'>
                    <input placeholder='사원번호' type="string" name='worker_id'/>
                    <input placeholder='비밀번호' type="string" name='password'/>
                    <input placeholder='실명' type="string" name='fullname'/>
                    <input placeholder='관리자여부' type="boolean" name='is_superuser'/>
                </div>
                <span className='member_btn'>
                    <button type='submit' onClick={addMember()}>등록</button>
                    <button>삭제</button>
                </span>

            </form>

        </div>
    );


};

export default MemberAdd;