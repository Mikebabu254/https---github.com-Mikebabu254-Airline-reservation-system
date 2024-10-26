const NavBar = () => {
  return (
    <>
      <nav className="navbar nav-expand-lb bg-body-tertiary">
        <div className="container-fluid">
          <a className="navebar-brand" href="#">
            Explore
          </a>
          <a className="navebar-brand" href="#">
            Book
          </a>
          <a className="navebar-brand" href="#">
            Experience
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            ></input>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
