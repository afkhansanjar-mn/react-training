import logo from './logo.svg';
import './App.css';
import Home from './home';
import Login from './Login';
import NavigationBar from './NavbarMenu';
import NavbarMenu from './NavbarMenu';
import Cake from './Cake';
import User from './User';
import Signup from './Signup';
import Meeting from './Meeting';
import { Routes,BrowserRouter,Route } from "react-router-dom";
import ForgotPassword from './ForgotPassword';
import Edituser from './Edituser';
import LoginApi from './SignupApi';
import Search from './Search';
import Cart from './Cart';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <label>afkhan</label> */}
      {/* <User/> */}
     {/* <NavbarMenu/>
      <Home/>
      <Login/> */}
      {/* <Cake/> */}
      {/* <Signup/> */}
      {/* <Meeting/> */}
      <BrowserRouter>
      <NavbarMenu/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signupapi' element={<LoginApi/>}></Route>
        <Route path='/data' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/edit/:userid' element={<Edituser/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/Cake/:cakeid' element={<Cake/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
