import React, {useState,useEffect} from 'react';
import search_img from '../assets/search.png';
import downicon from '../assets/downicon.png';
import memberadd from '../assets/member_add.png';
import '../styles/MemberManage.css';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { MEMBER_LIST } from './user_type';

function Line(props){
  return <div className='line'>
    <p>number</p>
    <p>photo</p>
    <p>name</p>
    <p>number</p>
    <p>phone</p>
    <p>email</p>
    <p></p>
  </div>
};

const MemberManage = () => {

  const [member_list, setMemberList]=useState([]);
  const [count_per_page,setCountPerPage]=useState(10);//페이지당출력할객체수
  const [current_page,setCurrentPage]=useState(1);//현재페이지번호(0부터시작)
  const dispatch = useDispatch();

    axios.post('http://acslab.toygoon.com:8000/api/userlist/',{
      count_per_page:count_per_page,
      current_page:current_page,
    }).then(function(response){
        console.log(response.data);
      });
  

    useEffect(()=>{
      const listData = async()=>{
        const response =await axios.get('http://acslab.toygoon.com:8000/api/userlist/');
        setMemberList(response.data);
      };
      listData();
    },[]);
    console.log(member_list);


  function addClick(e){
    window.location.replace("/add")
  }
    return (
        <div className='wrap'>
          <div className='content'>
            <span className='member_search'>
              <input type='submit 'name='nn'className='search_input'/>
              <button className='search_img'><img src={search_img}/></button>    
            </span>
            <div className='drop'>
              <div className='dropdown'>
                <button className='dropbtn'>
                  최신등록순
                  <span className='down_icon'><img src={downicon}/></span>
                </button>
                <div className='dropdown-content'>
                  <p>최신 등록순</p>
                  <p>이름순</p>
                </div>
              </div>
              <button className='member_add' onClick={addClick}><img src={memberadd}/></button>
            </div>
          

            <div className='mainBox'>
              <div className='lead'>
                <p></p>
                <p>사진</p>
                <p>이름</p>
                <p>사원번호</p>
                <p>전화번호</p>
                <p>이메일</p>
              </div>
              <Line></Line>
              <Line></Line>
              <Line></Line>
            </div>
          </div>
        </div>
    );
};

export default MemberManage;