import "../colors.css"

function Color({userColor, clickFunction}) {

    return (
      <div className="Color">
         <p>{userColor}</p>
         <div onClick = {clickFunction} className={userColor}></div>
      </div>
    );
  }
  
  export default Color;
  