import { DropdownColors } from "@amcharts/amcharts5/.internal/charts/stock/toolbar/DropdownColors";
import React from "react";
import styled from 'styled-components'; 
import { getCookie, removeCookie } from "../pages/Cooke";
import axios from "axios";
import { useState, useEffect } from 'react';
const Dropdown=()=>{

    let token=getCookie("access_token");
    const logout=()=>{
        axios.post('http://acslab.toygoon.com:8000/api/logout/',{
            'token':token,
        }).then(function(res){
            console.log(res);
            if(res.statusText=="OK"){
                removeCookie("access_token");
                removeCookie("fullname");
                removeCookie("worker_id");

                removeCookie("is_superuser");
                alert("로그아웃");
                document.location.href = '/signin';
            }
            
        })
    }


    return(
        <Drop>
            <button onClick={logout}>로그아웃</button>
        </Drop>
    );
}
export default Dropdown;

const Drop = styled.div`

    li{
        box-sizing:border-box;
        margin-top:0.5vh;
        box-shadow: 0px 3px 6px #00000029;
        color:black;
    }

     
`;