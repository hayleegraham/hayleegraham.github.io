import mScott from '../assets/michaelScott.jpg'

function Nav() {
    return (
      <div className="navContainer">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Haylee's App
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </div>
        </nav>
  
        <div className="container">
          <h3>I Made A React App</h3>
          <img src={mScott}></img>
        </div>
      </div>
    );
  }
  
  export default Nav;
  