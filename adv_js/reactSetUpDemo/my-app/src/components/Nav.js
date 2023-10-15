function Nav(props) {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              WebSiteName
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
        <h3>Basic Navbar Example</h3>
        <p>
          A navigation bar is a navigation header that is placed at the top of
          the page.
        </p>
      </div>
    </div>
  );
}

export default Nav;
