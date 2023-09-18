import React from "react";

const UserInfo = props => {
    return (
        <div>
            <p>Ironhacker: {props.userName}</p>
            <img src="https://i.imgur.com/OH7dtc0.png" alt="" />
        </div>
    )
};

export default UserInfo;
