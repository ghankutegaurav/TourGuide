import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from './components/Signup.js';
import Signin from './components/Signin.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import { Contact } from './components/Contact';
import { Header} from './components/Header';
import { Intro } from './components/Intro';
import { Packages } from './components/Packages';
import { Footer } from './components/Footer';
import bggvid_Trim from './bggvid_Trim.mp4';
import { Udaipur } from './components/Cities/Udaipur';
import { Manali } from './components/Cities/Manali';
import { Amritsar } from './components/Cities/Amritsar';
import { Goa } from './components/Cities/Goa';
import { Munnar } from './components/Cities/Munnar';
import { Lonavala } from './components/Cities/Lonavala';
import { AdminLogin } from './components/AdminLogin';
import { Customers } from './components/Customers';
import { AdminBoard } from './components/AdminBoard';

function App() {
  return (
    <BrowserRouter className="">
      <div className='main'>
        <Header />
        <video src={bggvid_Trim} autoPlay loop muted />
        <div className='overlay'></div>
          <Routes>
            <Route path='/' element={<Intro />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/adminlogin' element={<AdminLogin />}/>
            <Route path='/packages' element={<Packages />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/udaipur' element={<Udaipur/>} />
            <Route path='/manali' element={<Manali />} />
            <Route path='/amritsar' element={<Amritsar />} />
            <Route path='/lonavala' element={<Lonavala />} />
            <Route path='/goa' element={<Goa />} />
            <Route path='/munnar' element={<Munnar />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/adminboard' element={<AdminBoard />} />
          </Routes>
        <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
