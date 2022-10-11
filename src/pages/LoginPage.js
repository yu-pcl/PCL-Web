
import React from 'react';
import styled from 'styled-components';
import { useState} from 'react';

const LoginPage = () => {

    const [worker_id, setworker_id] = useState();
    const [password, setpassword] = useState();

    function goToMain(e){
        e.preventDefault();
        fetch('http://acslab.toygoon.com:8080/', {
          method: 'POST',
          body: JSON.stringify({
            worker_id: this.state.worker_id,
            password: this.state.password,
          }),
        })
          .then(response => response.json())
          .then(response => {
            if (response.token) {
              localStorage.setItem('token', response.token);
              this.props.history.push('/MainPage.js');
            } else {
              alert('다시 로그인하세요.');
            }
          });
      };
    
function login(){
    fetch('http://acslab.toygoon.com:8000/api/login/',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            worker_id:worker_id,
            password:password,
        }),
    })
    .then(res=>res.json())
    .then(result=>
        result.token ? goToMain():alert(result.message));
}

return (
    <Container>
        <LeftContent></LeftContent>
        <RightContent>
            <form>
                <h1>로그인</h1>
                <div>
                <input
                    name = 'worker_id'
                    placeholder='사원번호'
                />
                <input
                    name = 'password'
                    placeholder='비밀번호'
                />
                </div>
                <input type='submit' value="로그인" onClick={login()}/>
            </form>
            </RightContent>
        </Container>
        
    );
};

const Container = styled.div`
width : 100vw;
height : 90vh;
display : flex;
justify-content: center;
align-items: center;
`;
const LeftContent = styled.div`
width : 55%;
height : 90vh;
background-color : #D1CFC9;
`;
const RightContent = styled.div`
width : 45%;
height : 90vh;
display : flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;


form{
    height : 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items : center;
    
    h1{
        font-size : 22px;
    }

    div{
    height : 20vh;
    display : flex;
    flex-direction: column;
    justify-content: space-evenly;
    }
};
input{
    width: 295px;
    height: 40px;
    text-align: left;
    color: #060A0E;
    opacity: 1;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border : 0px;
    opacity: 1;
    padding: 0px;
    padding-left: 5px;
}
input[type="submit"]{
    color: white;
    cursor : pointer;
    text-align: center;
    width: 300px;
    height: 40px;
    background: #007200BA 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border : 0px;
    opacity: 1;
}
`;

export default LoginPage;