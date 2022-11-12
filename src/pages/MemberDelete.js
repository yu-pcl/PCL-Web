import React, { useEffect } from 'react';
import '../styles/MemberAdd.css';
import logo from '../assets/logo.png';
import memberpic from '../assets/member_pic.jpeg';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RESISTER_USER } from '../pages/user_type';

import { setCookie,getCookie } from './Cooke';
const MemberDelete = () => {


        useEffect(()=> {

            let modify_target_id = prompt("삭제할 사원 번호를 입력하세요.");
            setCookie("modify_worker_id",`${modify_target_id}`);
            fetch(`http://acslab.toygoon.com:8000/api/deluser/${modify_target_id}`, {
                method : "GET"   
            }).then(res=>res.json()).then(res=>{
                if(res!==undefined){
                    alert("직원 삭제 성공")
                    window.location.replace("/manage")
                }
            });              
        }, []);
    
        

};

export default MemberDelete;