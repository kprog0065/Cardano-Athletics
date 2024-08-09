import { FC, FormEvent, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Sticky from "react-stickynode";
import { useAppDispatch } from "../../hooks/redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

interface NavbarProps {
  mClass?: String;
  nClass?: String;
  cClass?: String;
  slogo?: String;
  hbtnClass?: String;
}
const Navbar = ({ mClass, nClass, cClass, slogo, hbtnClass }: NavbarProps) => {
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to="/">
              <img src={require("../../img/logo2.png")} alt="" />
              <img src={require("../../img/logo.png")} alt="logo" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ flexGrow: 0 }}
            >
              <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link to="/" className="nav-link" role="button">
                    Home
                  </Link>
                </li>

                {/* <li className="dropdown submenu nav-item">
                                    <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Service</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink title="Service" className="nav-link" to='/Service'>Service</NavLink></li>
                                        <li className="nav-item"><NavLink title="Service Details" className="nav-link" to='/ServiceDetails'>Service Details</NavLink></li>
                                    </ul>
                                </li> */}
                <li className="dropdown submenu nav-item">
                  <Link
                    to="./"
                    title="Pages"
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul role="menu" className=" dropdown-menu">
                    <li className="nav-item">
                      <Link
                        title="About"
                        className="nav-link"
                        to="/player-profile"
                      >
                        Player Profile
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="dropdown submenu nav-item"><Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Portfolio</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink title="Portfolio 2" className="nav-link" to='/Portfolio-2col'>Portfolio 2col</NavLink></li>
                                    </ul>
                                </li> */}
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/blog" className="nav-link">
                        Blog List
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                {/* New NFT Creator Button */}
                <li className="nav-item">
                  <Link
                    className="btn_get btn_hover"
                    to="http://localhost:8080"
                  >
                    NFT Creator
                  </Link>
                </li>
              </ul>
              <a
                className={`btn_get btn_hover ${hbtnClass}`}
                onClick={logoutHandler}
              >
                Logout
              </a>
            </div>
          </div>
        </nav>
      </header>
    </Sticky>
  );
};
export default Navbar;
