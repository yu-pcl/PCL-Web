import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getCookie } from '../pages/Cooke';   
import axios from 'axios';
import { removeCookie } from '../pages/Cooke'; 
import ManagerHeader from '../components/ManagerHeader';  
import EmployeeHeader from '../components/EmployeeHeader';  

const Header = (props) => { 
    if (window.location.pathname === '/statement') return null;

    let fullname = getCookie("fullname");
    let worker_id = getCookie("worker_id")

    if(worker_id=="1000"){
       return <ManagerHeader/>;
    }
    if(worker_id!=="1000"){
        return <EmployeeHeader/>;
    }
    
};

export default Header;

const HeaderContainer = styled.div`
width : 100%;
height : 10vh;
display : flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color : white;

    .logo{
    margin-left : 100px;
    width : 15%;
    display : flex;
    flex-direction : row;
    justify-content: space-around;
    align-items: center;
    text-decoration : none;

        .img{
            width : 120px;
        }
    }

    h3{
        color: black;
        margin-right : 100px;
    }
    h4{
        color: black;
    }
    .navs{
        width: 55vw;
        display: flex;
        flex-direction : row;
        justify-content: space-around;
    }
    .name{
        color: #007200;
    }
`;