import React from 'react';
import '../styles/MemberAdd.css';
import logo from '../assets/logo.png';
import memberpic from '../assets/member_pic.jpeg';
const MemberAdd = () => {
    return (
        <div className='wwrap'>
            <div className='up'>
                <span className='member_pic'><img src={memberpic}/></span>
                <span className='logogo'><img src={logo}/></span>
            </div>
            <div className='member_input'>
                <input placeholder='이름'/>
                <input placeholder='사원번호'/>
                <input placeholder='전화번호'/>
                <input placeholder='이메일'/>
            </div>
            <span className='member_btn'>
                <button>등록</button>
                <button>삭제</button>
            </span>
        </div>
    );
};

export default MemberAdd;