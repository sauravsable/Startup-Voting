import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { showLoginModal, showSignModal } from "../../slice/userSlice";
import { locationData } from "../../utils/staticData"; // Import static data
import "./Footer.css";

export const Footer = () => {
  const dispatch = useDispatch();
  let pageName = "home";

  const locations = locationData.map((location, idx) => (
    <p key={idx} className="address">{location.location_details}</p>
  ));

  return (
    <section className="section-footer container">
      {pageName === "home" ? (
        <HashLink className="footer-logo-container" to="#headerTop">
          <h1 className="footer-logo-text">Startup Sprint</h1>
        </HashLink>
      ) : (
        <Link className="footer-logo-container" to="/">
          <h1 className="footer-logo-text">Startup Sprint</h1>
        </Link>
      )}

      <div className="footer-link-container foot-reg">
        <button className="footer-btn" onClick={() => dispatch(showSignModal())}>
          Join the Community
        </button>
      </div>

      <div className="footer-link-container">
        <button className="footer-btn" onClick={() => dispatch(showLoginModal())}>
          Sign in
        </button>
      </div>

      <div className="footer-link-container">
        <Link className="footer-link" to="/aboutus">
          About Us
        </Link>
      </div>

      <h3 className="footer-heading">Our Startup Hubs</h3>

      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} by Startup Spring, Inc.  
        Empowering entrepreneurs, fostering innovation, and shaping the future of startups.  
      </p>

      <div className="footer-address-container">{locations}</div>
    </section>
  );
};
