import { useEffect } from "react";
import { Routes,Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Header } from "./components/Header/Header"
import './App.css';
import { TopEdge } from "./components/TopEdge/TopEdge";
import { About } from "./pages/About/About";
import { useDispatch,useSelector } from "react-redux";
import {LoginModal} from './modals/LoginModal';
import {SignupModal} from './modals/SignupModal';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/Footer/Footer";
import { loadUser } from "./thunk/userThunk";
import { hideLoginModal, hideSignModal } from "./slice/userSlice";

function App() {
  const dispatch = useDispatch();
  const { signModalState, loginModalState } =useSelector((store) => store.user);

  useEffect(()=>
{
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (signModalState) {
          dispatch(hideSignModal());
        }
        if (loginModalState) {
          dispatch(hideLoginModal());
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

},[signModalState,loginModalState])

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
      <TopEdge/>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/aboutus" element={<About/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      {signModalState && <SignupModal />}
      {loginModalState && <LoginModal />}
    </div>
  )
}

export default App
