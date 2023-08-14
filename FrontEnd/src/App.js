import './App.css';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Mainpage from './components/Mainpage';



const App=() =>{

  return(
    <div>
     <Router>
     <Routes>
      <Route path='/' element ={<Home/>}/> 
      <Route path='/login' element ={<Login/>}/> 
      <Route path='/register' element ={<Register/>}/>
      <Route path='/mainpage' element ={<Mainpage/>}/>  
      <Route path='/logout' element={<Logout />} ></Route>
      </Routes>
      </Router> 
      </div>

  );
}

export default App;

