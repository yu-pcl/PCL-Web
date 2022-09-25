import React from 'react';
import search_img from '../assets/search.png';
import downicon from '../assets/downicon.png';
import memberadd from '../assets/member_add.png';
import '../styles/MemberManage.css'
const MemberManage = () => {
    return (
        <div className='wrap'>
            <span className='member_search'>
              <input type='submit 'name='nn'className='search_input'/>
              <button className='search_img'><img src={search_img}/></button>    
            </span>
            
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
            <button className='member_add'><img src={memberadd}/></button>    
        </div>
    );
};

export default MemberManage;