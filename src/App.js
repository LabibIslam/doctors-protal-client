import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Review from './pages/Review/Review';
import Contactus from './pages/Contact/Contactus';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='login' element={<Login />}></Route>
        <Route path='appointment' element={<Appointment />}></Route>
        <Route path='review' element={<Review />}></Route>
        <Route path='contact' element={<Contactus />}></Route>
      </Routes>
    </div>
  );
}

export default App;
