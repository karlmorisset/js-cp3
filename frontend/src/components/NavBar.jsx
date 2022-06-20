/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import { useCaribbean } from "@contexts/CaribbeanContext";

function NavBar() {
  const { reload } = useCaribbean();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Checkpoint 3
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Instructions
          </Link>
          <Link className="nav-item nav-link" to="/map">
            Map
          </Link>
          <button
            type="button"
            className="btn mx-2"
            onClick={() => {
              reload();
            }}
          >
            Start
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
