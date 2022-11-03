import React from "react";

const MemberList=({member_list})=>{
    return(
        <div>
            <div className="list">
                <p>사진</p>
                <p>{member_list.fullname}</p>
                <p>{member_list.worker_id}</p>
                <p>전화번호</p>
                <p>이메일</p>
            </div>
        </div>
    );
};
export default MemberList;