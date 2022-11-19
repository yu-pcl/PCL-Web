import React,  { useState } from 'react';
import '../styles/InvoicePage.css';
import axios from 'axios';
import { getCookie } from './Cooke';
import styled from 'styled-components'; 

const dummy = {
    "gaesu" : 250
};

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let date = today.getDate();

let worker_id = getCookie("worker_id");
const InvoicePage = () => {

    const [parcel_list, setParcelList] = useState([]);
    const [count_per_page, setCountPerPage] = useState(10);//페이지당출력할객체수
    const [current_page, setCurrentPage] = useState(1);//현재페이지번호(0부터시작)
    const [gaesu, setGaesu] = useState(dummy.gaesu);

    axios.post(`http://acslab.toygoon.com:8000/api/paged_parcel/${worker_id}`, {
        count_per_page: count_per_page,
        current_page: current_page,
    }).then(function (res) {
        setParcelList(res.data);
    });

    
    const onClickHandler=(event)=>{
        setCurrentPage(event.currentTarget.value);
    } 
    return (
        <div className='wrap'>
            <div className='content'>
                <div className='topBox'>
                    <div>
                        <h2>{year}년 {month}월 {date}일</h2>
                    </div>
                    <div className='gun'>
                        <h2>총</h2>
                        <div className='gaesu'>
                            <h1>{gaesu}</h1>
                            <h2>개</h2>
                        </div>
                    </div>
                </div> 
                <div className='mainBox'>
                    <div className='lead'>
                        <p>번호</p>
                        <p>운송장번호</p>
                        <p>접수날짜</p>
                        <p>규격</p>
                        <p>등록 시각</p>
                    </div>
                    <div>
                        {parcel_list.map(function (item, i) {
                        return (
                            <div key={i} className="list">
                            <span>{item.id}</span>
                            <span>{item.num}</span>
                            <span>{item.date}</span>
                            <span>{item.size}</span>
                            <span>{item.query_time}</span>
                            </div>
                        )
                        })}
                    </div>
                    </div>
                    <div className='page_selector'>
                        <div className='page_text'>
                        <button onClick={onClickHandler} value={1}>1</button>
                        <button onClick={onClickHandler} value={2}>2</button>
                        <button onClick={onClickHandler} value={3}>3</button>
                        <button onClick={onClickHandler} value={4}>4</button>
                        <button onClick={onClickHandler} value={5}>5</button>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default InvoicePage;

