import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'; 
import { getCookie } from '../pages/Cooke';  
import Dropdown from './Dropdown';

    const ManagerHeader=(props)=>{

        const [view,set_view]=useState(false);

        let fullname = getCookie("fullname");
        let worker_id = getCookie("worker_id")
        
        
        return(
            <HeaderContainer>
            <NavLink 
                className='logo'
                to= "/"
            >
                <img
                    className='img' 
                    src={logo}
                    alt="logo"
                />
            </NavLink>
                {/* <NavLink
                className='login'
                to= "/signin"
                >
                    <h3>
                        로그인
                    </h3>   
                </NavLink> */}
                
                <div className='navs'>
                    <NavLink
                        className='manager'
                        to= "/manager"
                    >
                        <h4>
                            급여 관리
                        </h4>   
                    </NavLink>
                    <NavLink
                        className='manage'
                        to= "/manage"
                    >
                        <h4>
                            직원관리
                        </h4>   
                    </NavLink>
                    <NavLink
                        className='login'
                        to= "/insight"
                    >
                        <h4>
                            인사이트
                        </h4>   
                    </NavLink>
                    
                    <h4 className='name' onClick={()=>{set_view(!view)}}>
                        {fullname}님
                        {view && <Dropdown/>}
                    </h4>
                </div>
        </HeaderContainer>
        )
    }

   

export default ManagerHeader;

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
        width:7vw;
        
        color: #007200;
        list-style:none;
    }
`;