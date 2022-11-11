import React,  { useState } from 'react';
import '../styles/InvoicePage.css';
import axios from 'axios';

const dummy = {
    "year" : 2022,
    "month" : 11,
    "day" : 2,
    "gaesu" : 250
};

const InvoicePage = () => {

    const [member_list, setMemberList] = useState([]);
    const [count_per_page, setCountPerPage] = useState(10);//페이지당출력할객체수
    const [current_page, setCurrentPage] = useState(1);//현재페이지번호(0부터시작)
    const [year, setYear] = useState(dummy.year);
    const [month, setMonth] = useState(dummy.month);
    const [day, setDay] = useState(dummy.day);
    const [gaesu, setGaesu] = useState(dummy.gaesu);

    axios.post('http://acslab.toygoon.com:8000/api/userlist/', {
        count_per_page: count_per_page,
        current_page: current_page,
    }).then(function (res) {
        setMemberList(res.data);
    });
    
    const onClickHandler=(event)=>{
        setCurrentPage(event.currentTarget.value);
    } 
    function addClick(e) {
    window.location.replace("/add")
    }

    return (
        <div className='wrap'>
            <div className='content'>
                <div className='topBox'>
                    <div>
                        <h2>{year}년 {month}월 {day}일</h2>
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
                        <p></p>
                        <p>운송장번호</p>
                        <p>접수날짜</p>
                        <p>규격</p>
                        <p>이메일</p>
                    </div>
                    <div>
                        {member_list.map(function (item, i) {
                        return (
                            <div key={i} className="list">
                            <span>1</span>
                            <span>{item.fullname}</span>
                            <span>{item.worker_id}</span>
                            <span>{item.phone}</span>
                            <span>{item.email}</span>
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