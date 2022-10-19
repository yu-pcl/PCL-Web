import { Cookies } from "react-cookie";

const cookies = new Cookies();

//쿠키에 값을 저장
export const setCookie = (name,value,option)=>{
    return cookies.set(name,value,{...option});
};
//쿠키에 있는 값을 get
export const getCookie=(name)=>{
    return cookies.get(name);
};
//쿠키 삭제
export const removeCookie = (name)=>{
    return cookies.remove(name);
}