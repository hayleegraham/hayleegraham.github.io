import Color from "./Color"

function User(props) {
  return (
    <div className="User">
        Hi {props.user} your color is <Color clickFunction = {props.clickFunction} userColor = {props.color}/>
    </div>
  );
}

export default User;
