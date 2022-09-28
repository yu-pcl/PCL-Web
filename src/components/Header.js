import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => { 
    
    return (
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
            
            {/* 로그인 전  */}
            {/* <NavLink
                className='login'
                to= "/signin"
            >
                <h3>
                    로그인
                </h3>   
            </NavLink> */}
            
            {/* 로그인 후 */}
            <div className='navs'>
                <NavLink
                    // 관리자용
                    // className='manager'
                    // to= "/manager"

                    // 직원용
                    className='employee'
                    to= "/employee"
                >
                    <h4>
                        급여 관리
                    </h4>   
                </NavLink>
                <NavLink
                    className='login'
                    to= "/signin"
                >
                    <h4>
                        운송장관리
                    </h4>   
                </NavLink>
                <NavLink
                    className='login'
                    to= "/signin"
                >
                    <h4>
                        인사이트
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
                    to= "/signin"
                >
                    <h4>
                        업무량예측
                    </h4>   
                </NavLink>
                <h4 className='name'>
                    name 님
                </h4>
            </div>
        </HeaderContainer>
    );
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
        width: 50vw;
        display: flex;
        flex-direction : row;
        justify-content: space-around;
    }
    .name{
        color: #007200;
    }
`;