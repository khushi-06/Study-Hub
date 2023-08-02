// import './App.css';
// import Login  from './components/login';
// import {  BrowserRouter , Routes, Route, Router} from 'react-router-dom'
// import Home from './components/home';



// const App=() =>{

//   return(
//     <div>
//      <Router>
//      <Routes>
//       <Route path='/' element ={<Home/>}/> 
//       <Route path='login' element ={<Login/>}/> 
//       </Routes>
//       </Router> 
//       </div>

//   );
// }

// export default App;

import './App.css';
import Navigation from './components/navigation'; 
import Herosection from './components/herosection';
import Ourcontent from './components/ourcontent';
import Login from './components/login';



const App=() =>{

  return(
      <div>
      <Navigation/>
      <Herosection/>
      <Ourcontent/>
      <Login/>
      </div>
  );
}

export default App;
