const Header = () => {
  return (
    <div className="header">
      <div className="logo-container"></div>
      <div className="nav-items">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Ticketmaster
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse float-right"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto float-right">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Concerts
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Arts & Theater
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
