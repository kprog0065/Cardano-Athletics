import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import SignIn from "./pages/Signin/Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUp from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/404";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return <React.Fragment> <Router>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<PrivateRoute page={<Home />} isNavbar={true} />} />
      <Route path='/player-profile' element={<PrivateRoute page={<MainPage />} isNavbar={true} />} />
      <Route path='/blog' element={<PrivateRoute page={<NotFound />} isNavbar={false} />} />
      <Route path='/contact' element={<PrivateRoute page={<NotFound />} isNavbar={false} />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </Router>
  </React.Fragment>;
}

export default App;
