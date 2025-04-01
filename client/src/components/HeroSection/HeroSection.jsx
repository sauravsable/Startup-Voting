import { HashLink } from "react-router-hash-link";
import { TextEffect } from "../TextEffect/TextEffect";
import './HeroSection.css';
import collage from '../../assets/collage.png';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoginModal } from "../../slice/userSlice";

export const HeroSection = () => {
  const {isAuthenticated,user} = useSelector((state)=>state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section className="section-hero">
      <div className="container hero">
        <div className="hero-text">
          <h1 className="heading-primary">
            <TextEffect preset="slide">
              Turn Your Startup Idea Into Reality
            </TextEffect>
          </h1>

          <p className="hero-description">
            Have a groundbreaking startup idea? Pitch it, gain votes, and secure funding from top venture capitalists. 
            Join <strong>Startup Sprint</strong> and take the first step toward launching your dream business!
          </p>
          
          <div className="hero-btn-container">
            <button className="btn btn-full"
            onClick={() => {
              isAuthenticated && user.role === "user"
                ? navigate("/user")
                : dispatch(showLoginModal());
            }}>
              
              Submit Your Idea
            </button>
            <HashLink to="#topIdeas" className="btn btn-outline">
              Explore Ideas &darr;
            </HashLink>
          </div>

          <div className="hero-review-section">
            <div className="customers-img">
              <img
                src="/Images/customers/customer-1.jpg"
                className="customer-img"
                alt="Participant"
              />
              <img
                src="/Images/customers/customer-2.jpg"
                className="customer-img"
                alt="Participant"
              />
              <img
                src="/Images/customers/customer-3.jpg"
                className="customer-img"
                alt="Participant"
              />
              <img
                src="/Images/customers/customer-4.jpg"
                className="customer-img"
                alt="Participant"
              />
              <img
                src="/Images/customers/customer-5.jpg"
                className="customer-img"
                alt="Participant"
              />
              <img
                src="/Images/customers/customer-6.jpg"
                className="customer-img"
                alt="Participant"
              />
            </div>

            <p className="hero-review-text">
              <span>10,000+</span> ideas submitted last year
            </p>
          </div>
        </div>

        <div className="hero-img-box">
          <img
            className="hero-img"
            src={collage}
            alt="Startup Innovation"
          />
        </div>
      </div>
    </section>
  );
};
