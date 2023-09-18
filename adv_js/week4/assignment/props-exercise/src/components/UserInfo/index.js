import React, {useState} from "react";

const UserInfo = props => {
    const [count, setCount] = useState(0);
    const incrementCount = ()=> {
        setCount((curCount)=>{return curCount + 1})
    }
    return (
        <div>
            <h3>Ironhacker: {props.userName}</h3>
            <p>Click the image to add to click counter!</p>
            <p>Click Counter: {count}</p>
            <img onClick= {incrementCount} src="https://i.imgur.com/OH7dtc0.png" alt="" />
        </div>
    )
};

export default UserInfo;
