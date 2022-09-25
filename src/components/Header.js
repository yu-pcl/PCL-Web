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
            <NavLink
                className='login'
                to= "/signin"
            >
                <h3>
                    로그인
                </h3>   
            </NavLink>
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
`;