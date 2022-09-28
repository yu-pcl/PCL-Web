import React from 'react';
import {useEffect, useState} from 'react';

const TestPage = () => {
    // 메시지 초기값 (테스트용)
    const [message, setMessage] = useState("");

    // useEffect(함수, 배열) : 컴포넌트가 화면에 나타났을 때 자동 실행
    useEffect(() => {
        // fetch(url, options) : Http 요청 함수
        fetch("/test")
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    }, [])


    return (
        <div className='wwrap'>
            {message}
        </div>
    );
};

export default TestPage;