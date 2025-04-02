import { useState,useEffect } from "react";
import './SignupModal.css'
import BarLoader from "react-spinners/BarLoader";
import { signupFailedToast} from "../toasts/toast";
import { useDispatch,useSelector } from "react-redux";
import { hideSignModal } from "../slice/userSlice";
import { register } from "../thunk/userThunk";
import {clearErrors} from '../slice/userSlice';

export const SignupModal = () => {
  const {loading,error,isAuthenticated} = useSelector((state)=>state.user);
  const [passViewState, setPassViewState] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();

  const togglePassState = (e) => {
    e.preventDefault();
    setPassViewState((prevState) => !prevState);
  };

  useEffect(()=>{
    if(error && name && email && password){
    //   dispatch(hideSignModal());
      signupFailedToast(error);
      dispatch(clearErrors())
    }

    if(isAuthenticated){
      dispatch(hideSignModal());
    }
  },[dispatch,error,isAuthenticated]);

  const handleDataInsert = async (e) => {
    e.preventDefault();

    dispatch(register({name,email,password}));
  };

  return (
    <div className="signup-form">
      <form onSubmit={(e) => handleDataInsert(e)}>
        <div className="signup-form-heading">
          <h2 className="signup-form-heading-text">
            Create a STARTUP SPRINT Account
          </h2>
          <button
            type="button"
            className="btn-form-exit"
            onClick={() => dispatch(hideSignModal())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="form-icon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </button>
        </div>

        <div className="signup-form-body">
            <div className="signup-form-category">
              <label>
                User Name: <span>*</span>
              </label>
              <input
                disabled={loading}
                name="firstName"
                type="text"
                placeholder="Enter First Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
          </div>

          <div className="signup-form-category">
            <label>
              Email: <span>*</span>
            </label>
            <input
              disabled={loading}
              name="email"
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="signup-form-category">
            <label>
              Password(Must contain at least 8 digits): <span>*</span>
            </label>
            <div className="input-password">
              <input
                disabled={loading}
                name="password"
                value={password}
                type={passViewState ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
              <button
                type="button"
                className="pass-icon-btn"
                onClick={(e) => togglePassState(e)}
              >
                {passViewState ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pass-icon"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                    />
                    <circle
                      cx="256"
                      cy="256"
                      r="80"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pass-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                    <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-reg" disabled={loading}>
            {loading ? <BarLoader color="#e6e6e8" /> : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
};
