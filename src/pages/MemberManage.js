import React, { useState, useEffect } from 'react';
import search_img from '../assets/search.png';
import downicon from '../assets/downicon.png';
import memberadd from '../assets/member_add.png';
import '../styles/MemberManage.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { MEMBER_LIST } from './user_type';

const MemberManage = () => {

  const [member_list, setMemberList] = useState([]);
  const [count_per_page, setCountPerPage] = useState(10);//페이지당출력할객체수
  const [current_page, setCurrentPage] = useState(1);//현재페이지번호(0부터시작)

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
        <span className='member_search'>
          <input type='submit ' name='nn' className='search_input' />
          <button className='search_img'><img src={search_img} /></button>
        </span>
        <div className='drop'>
          <div className='dropdown'>
            <button className='dropbtn'>
              최신등록순
              <span className='down_icon'><img src={downicon} /></span>
            </button>
            <div className='dropdown-content'>
              <p>최신 등록순</p>
              <p>이름순</p>
            </div>
          </div>
          <button className='member_add' onClick={addClick}><img src={memberadd} /></button>
        </div>

        <div className='mainBox'>
          <div className='lead'>
            <p>번호</p>
            <p>이름</p>
            <p>사원번호</p>
            <p>전화번호</p>
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
              <button onClick={onClickHandler} value={6}>6</button>
            </div>
        </div>
      </div>
    </div>
  );
};



export default MemberManage;