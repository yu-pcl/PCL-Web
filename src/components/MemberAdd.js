import React,{useState} from 'react';
import '../styles/MemberAdd.css';
import logo from '../assets/logo.png';
import memberpic from '../assets/member_pic.jpeg';
import axios from 'axios';

class MemberAdd extends React.Component {

    constructor(props){
        super(props);
        this.state={
            worker_name:'',
            worker_id:'',
            phone:'',
            email:''
        }

        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.handleValueChange=this.handleValueChange.bind(this);
        this.addmember = this.addmember.bind(this);
    }
    handleFormSubmit(e){
        e.preventDefalut()
        this.addmember()
        .then((response)=>{
            console.log(response.data);
        })
    }
    handleValueChange(e){
        let nextState = {};
        nextState[e.target.name]=e.target.value;
        this.setState(nextState);
    }

    addmember(){
        const url ='http://localhost:3000/add'
        const formdata = new FormData();
        formdata.append('worker_name',this.state.worker_name);
        formdata.append('worker_id',this.state.worker_id);
        formdata.append('phone',this.state.phone);
        formdata.append('email',this.state.email);

        const config={
            headers:{
                'content-type':'multipart/form-data'

            }
        }

        return axios.post(url,formdata,config)
    }
    render(){
        return (
            <div className='wwrap'>
                <div className='up'>
                    <span className='member_pic'><img src={memberpic}/></span>
                    <span className='logogo'><img src={logo}/></span>
                </div>
                <form className='member_input' onSubmit={this.handleFormSubmit}>
                    <input placeholder='이름' type="text" name='worker_name' value={this.state.worker_name} onChange={this.handleValueChange}/>
                    <input placeholder='사원번호' type="number" name='worker_id' value={this.state.worker_id} onChange={this.handleValueChange} />
                    <input placeholder='전화번호'type="number" name='phone' value={this.state.phone} onChange={this.handleValueChange}/>
                    <input placeholder='이메일' type="text" name='email' value={this.state.email} onChange={this.handleValueChange}/>
                    <span className='member_btn'>
                        <button type='submit'>등록</button>
                        <button>삭제</button>
                    </span>  
                
                </form>
                
            </div>
        )
    };
    

    
    
};

export default MemberAdd;