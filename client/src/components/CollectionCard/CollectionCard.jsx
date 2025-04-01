import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showLoginModal } from "../../slice/userSlice";
import './CollectionCard.css';

export const CollectionCard = ({ id, name, image_path, votes, submission_date }) => {
  const navigate = useNavigate();
  const { isAuthenticated, signedPerson } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const ourRating = votes; 

  return (
    <div
      className="home-movie-card"
      onClick={() => navigate(`/movieDetails/${id}`)}
    >
      <div className="home-movie-img-box">
        <img
          className="home-movie-img"
          src={image_path}
          alt={`${name} photo`}
        />
      </div>

      <div className="movie-card-line line-1">
        <p className="movie-title">{name}</p>

        <div className="movie-rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="collection-icon"
            viewBox="0 0 512 512"
          >
            <path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" />
          </svg>
          <span>{ourRating.toLocaleString()} votes</span> 
        </div>
      </div>

      <button
        className="book-btn btn"
        onClick={(e) => {
          e.stopPropagation();
          isAuthenticated && signedPerson.person_type === "Customer"
            ? navigate("/purchase")
            : dispatch(showLoginModal());
        }}
      >
        Vote Now
      </button>
    </div>
  );
};
