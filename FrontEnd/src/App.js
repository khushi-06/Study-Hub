import './App.css';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';



const App=() =>{

  return(
    <div>
     <Router>
     <Routes>
      <Route path='/' element ={<Home/>}/> 
      <Route path='/login' element ={<Login/>}/> 
      <Route path='/register' element ={<Register/>}/> 
      </Routes>
      </Router> 
      </div>

  );
}

export default App;

// import './App.css';
// import Navigation from './components/navigation'; 
// // import Herosection from './components/herosection';
// import Ourcontent from './components/ourcontent';
// // import Register from './components/register';
// import Login from './components/login';
// // import Main from './components/main';





// const App=() =>{

//   return(
//       <div>
//       <Navigation/>
//       {/* <Herosection/> */}
//       <Ourcontent/>
//       {/* <Register/> */}
//       <Login/>
//       </div>
//   );
// }

// export default App;
